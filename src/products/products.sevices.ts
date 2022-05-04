import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class productService {
    private products: Product[] = [];
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {

    }
    async insertProduct(title: string, price: number, description: string) {
        // const prodId = Math.random().toString();
        const newProduct = new this.productModel({
            title,
            price,
            description
        });
       const result = await newProduct.save();
       console.log(result);
        return "done";
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(prodId: string) {
        const product = this.findProductById(prodId)[0];
        return { ...product };
    }
    updatedProduct(prodId: string, title: string, description: string, price: number) {
        const [product, index] = this.findProductById(prodId);
        const updatedProduct = {...product};
        if(title){
            updatedProduct.title = title;
        }
        if(description){
            updatedProduct.description = description;
        }
        if(price){
            updatedProduct.price = price;
        }
        
    }
    private findProductById(prodId: string): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === prodId);
        const product = this.products[productIndex];
        if(!product){
            throw new NotFoundException('Could not find product');
        }
        return [product, productIndex];
    }
    deleteProduct(prodId: string) {
        const [product, index] = this.findProductById(prodId);
        this.products.splice(index, 1);
    }

}
