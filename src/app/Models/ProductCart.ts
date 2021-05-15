import { Cart } from "./Cart";
import { IProduct } from "./Product";

export class ProductCart {
    constructor(
        public ID:number, 
        public Product:IProduct, 
        public Cart:Cart
    ){}
}