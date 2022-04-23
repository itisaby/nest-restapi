import { Module } from '@nestjs/common';
import { productController } from './products.controller';
import { productService } from './products.sevices';

@Module({
    controllers: [productController],
    providers: [productService]
})
export class productModule {}
