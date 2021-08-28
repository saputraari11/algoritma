import { ProductService } from "./products.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(title: string, desc: string, price: number): {
        id: string;
    };
    infoProduct(): import("./products.models").Products[];
    getId(id: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    change(id: number, title: string, desc: string, price: number): any;
    delete(id: number): any;
}
