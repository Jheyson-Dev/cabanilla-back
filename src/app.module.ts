import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PersonModule } from './person/person.module';
import { PermissionModule } from './permission/permission.module';
import { RolModule } from './rol/rol.module';
import { RolsPermissionsModule } from './rols-permissions/rols-permissions.module';
import { LogModule } from './log/log.module';
import { UsersRolsModule } from './users-rols/users-rols.module';
import { AreaModule } from './area/area.module';
import { StoreModule } from './store/store.module';
import { VoucherModule } from './voucher/voucher.module';
import { EndorsementModule } from './endorsement/endorsement.module';
import { CategoryModule } from './category/category.module';
import { SupplierModule } from './supplier/supplier.module';
import { UnitOfMeasurementModule } from './unit-of-measurement/unit-of-measurement.module';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';
import { InventoryMovementModule } from './inventory-movement/inventory-movement.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    PrismaModule,
    PersonModule,
    PermissionModule,
    RolModule,
    RolsPermissionsModule,
    LogModule,
    UsersRolsModule,
    AreaModule,
    StoreModule,
    VoucherModule,
    EndorsementModule,
    CategoryModule,
    SupplierModule,
    UnitOfMeasurementModule,
    ProductModule,
    InventoryModule,
    InventoryMovementModule,
  ],
  controllers: [],
})
export class AppModule {}
