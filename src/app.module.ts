import { Module } from '@nestjs/common';
import { authModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { productModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
const password = process.env.PWD;
@Module({
  imports: [authModule, UserModule, productModule, ConfigModule.forRoot(), MongooseModule.forRoot(
    `mongodb+srv://node-rest:${password}@cluster1.fstlx.mongodb.net/rstdb?retryWrites=true&w=majority`
    )],
  
})
export class AppModule {}
