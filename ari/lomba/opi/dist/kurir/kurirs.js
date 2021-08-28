"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const kurirs_models_1 = require("./kurirs.models");
let ProductService = class ProductService {
    constructor() {
        this.product = [];
    }
    insert(title, description, price) {
        const pid = Math.random().toString();
        const newProduct = new kurirs_models_1.Products(pid, title, description, price);
        this.product.push(newProduct);
        return pid;
    }
    get() {
        return [...this.product];
    }
    getId(i) {
        const pro = this.FindProdcut(i)[0];
        return Object.assign({}, pro);
    }
    change(id, title, description, price) {
        const [product, index] = this.FindProdcut(id);
        const Upproduct = Object.assign({}, product);
        if (title) {
            Upproduct.title = title;
        }
        if (description) {
            Upproduct.description = description;
        }
        if (price) {
            Upproduct.price = price;
        }
        ;
        this.product[index] = Upproduct;
    }
    del(id) {
        const i = this.FindProdcut(id)[1];
        this.product.splice(i, 1);
    }
    FindProdcut(i) {
        const index = this.product.findIndex(e => e.id == i);
        const product = this.product[index];
        if (!i) {
            throw new common_1.NotFoundException("product doesn't find.");
        }
        return [product, index];
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=kurirs.js.map