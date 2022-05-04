import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productController } from './products.controller';
import { ProductSchema } from './products.model';
import { productService } from './products.sevices';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Product', schema: ProductSchema }
    ])],
    controllers: [productController],
    providers: [productService]
})
export class productModule {}
