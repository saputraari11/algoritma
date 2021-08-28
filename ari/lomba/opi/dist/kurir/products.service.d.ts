import { Products } from "./kurirs.models";
export declare class ProductService {
    private product;
    insert(title: string, description: string, price: number): string;
    get(): Products[];
    getId(i: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    change(id: string, title: string, description: string, price: number): void;
    del(id: string): void;
    private FindProdcut;
}
