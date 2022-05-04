import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { productService } from "./products.sevices";

@Controller('products')
export class productController {
    constructor(private readonly productservice: productService) {

    }
    @Post()
    async addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number) {
        const GeneratedID = await this.productservice.insertProduct(
            prodTitle,
             prodPrice,
              prodDesc
              );
        return {
            id: GeneratedID
        }
    }
    @Get()
    getAllProducts() {
        return this.productservice.getProducts();
    }
    @Get('/:prodId')
    getSingleProduct(@Param('prodId') prodId: string) {
        return this.productservice.getSingleProduct(prodId);
    }

    @Patch('/:prodId')
    updateProduct(@Param('prodId') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number) {
        const updatedProduct = this.productservice.updatedProduct(prodId, prodTitle, prodDesc, prodPrice);
        return updatedProduct;
    }
    @Delete('/:prodId')
    deleteProduct(@Param('prodId') prodId: string) {
        const product = this.productservice.getSingleProduct(prodId);
        this.productservice.deleteProduct(prodId);
        return {
            message: 'Successfully deleted product',
            product
        }
    }

}


