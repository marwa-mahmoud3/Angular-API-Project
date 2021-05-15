import { WishList } from "./WishList";
import { IProduct } from "./Product";

export class ProductWishList {
    constructor(
        public ID:number, 
        public Product:IProduct, 
        public wishList:WishList
    ){}
}