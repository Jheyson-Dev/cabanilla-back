import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from './entities/login.entity';
import { LoginInput } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RefreshTokenResponse } from './entities/refheshToken.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('data', { type: () => LoginInput }) input: LoginInput,
  ): Promise<LoginResponse> {
    return this.authService.login(input);
  }

  @Mutation(() => RefreshTokenResponse)
  async refreshToken(
    @Args('token', { type: () => String }) token: string,
  ): Promise<RefreshTokenResponse> {
    return this.authService.refreshToken(token);
  }
}
