import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginInput } from './dto/login.dto';
import { LoginResponse } from './entities/login.entity';
import { UserPayload } from './entities/payload.entity';
import { ConfigService } from '@nestjs/config';

// Librerias Externas
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenResponse } from './entities/refheshToken.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginInput): Promise<LoginResponse> {
    const { username, password } = data;
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        roles: {
          include: {
            rol: true,
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.status) {
      throw new UnauthorizedException('User is deactivated');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: UserPayload = {
      id: user.id,
      username: user.username,
      rol: user.roles[0].rol.name,
    };

    const accessToken = this.generateToken(payload, '1h');
    const refreshToken = this.generateToken(payload, '7d'); // Puedes implementar un sistema de refresh tokens

    return {
      accessToken,
      refreshToken,
    };
  }

  // async validateUser(username: string, password: string): Promise<any> {
  //   const user = await this.prisma.user.findFirst({
  //     where: {
  //       username,
  //     },
  //   });

  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  //   if (!isPasswordValid) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   return user;
  // }

  private generateToken(payload: UserPayload, expiresIn: string): string {
    const secret = this.configService.get<string>('JWT_SECRET'); // Debes almacenar esto en una variable de entorno
    return this.jwtService.sign(payload, { expiresIn, secret });
  }

  async refreshToken(token: string): Promise<RefreshTokenResponse> {
    try {
      console.log('Antiguo Token: ' + token);
      console.log('--------------------------------------------------------');
      const secret = this.configService.get<string>('JWT_SECRET');
      const decoded = this.jwtService.verify(token, { secret }) as UserPayload;
      // ELIMINAMOS LA PROPIEDAD EXPIRE-IN
      const { exp, ...payload } = decoded;
      payload.timestamp = Date.now();
      const newToken = await this.generateToken(payload, '30s');
      console.log('Nuevo Token: ' + newToken);
      return { token: newToken };
    } catch (err) {
      console.log(err);
      if (err.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token expired');
      } else if (err.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid token');
      } else {
        throw new UnauthorizedException('Unauthorized');
      }
    }
  }
}
