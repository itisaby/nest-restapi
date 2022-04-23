import { Module } from '@nestjs/common';
import { authModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { productModule } from './products/products.module';


@Module({
  imports: [authModule, UserModule, productModule],
  
})
export class AppModule {}
