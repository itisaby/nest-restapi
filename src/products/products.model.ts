export class productModel{
    id: string;
    title: string;
    price: number;
    description: string;
    constructor(id: string, name: string, price: number, description: string){
        this.id = id;
        this.title = name;
        this.price = price;
        this.description = description;
    }
}