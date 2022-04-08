import { Request } from "../request/request.class";
import { Product } from "../product/product.class";

export class Requestline {

    id: number = 0;

    requestId: number = 0;
    request!: Request;

    productId: number = 0;
    product!: Product;

    qty: number = 0;


}