import { Injectable, NotFoundException } from "@nestjs/common";
import { productModel } from "./products.model";
@Injectable()
export class productService {
    constructor() {

    }
    private products: productModel[] = [];
    insertProduct(title: string, price: number, description: string) {
        const prodId = Math.random().toString();
        const newProduct = new productModel(prodId, title, price, description);
        this.products.push(newProduct);
        return prodId;
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
        this.products[index] = updatedProduct;
    }
    private findProductById(prodId: string): [productModel, number] {
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
