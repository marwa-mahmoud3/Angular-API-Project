import { ProductCart } from "./ProductCart";

export class Cart {
    constructor(
        public ID:number, 
        public Products:ProductCart[]
    ){}
}