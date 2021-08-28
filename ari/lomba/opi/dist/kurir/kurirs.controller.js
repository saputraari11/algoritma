"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kurirController = void 0;
const common_1 = require("@nestjs/common");
const kurirs_service_1 = require("./kurirs.service");
let kurirController = class kurirController {
    constructor(kurirService) {
        this.kurirService = kurirService;
    }
    addProduct(no, nama, alamat, kurir_pengirim, tanggal_pengiriman) {
        const data = this.kurirService.insert(no, nama, alamat, kurir_pengirim, tanggal_pengiriman);
        return { data: data };
    }
    infoProduct() {
        return this.kurirService.get();
    }
    getId(id) {
        return this.kurirService.getId(id);
    }
    change(no, nama, alamat, kurir_pengirim, tanggal_pengiriman) {
        this.kurirService.change(no, nama, alamat, kurir_pengirim, tanggal_pengiriman);
        return "success";
    }
    delete(id) {
        this.delete(id);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)("no")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("alamat")),
    __param(3, (0, common_1.Body)("kurir")),
    __param(4, (0, common_1.Body)("tanggal")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Date]),
    __metadata("design:returntype", void 0)
], kurirController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)("/info"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], kurirController.prototype, "infoProduct", null);
__decorate([
    (0, common_1.Get)("/info/:id_product"),
    __param(0, (0, common_1.Param)("id_product")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], kurirController.prototype, "getId", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Body)("no")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("alamat")),
    __param(3, (0, common_1.Body)("kurir")),
    __param(4, (0, common_1.Body)("tanggal")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Date]),
    __metadata("design:returntype", void 0)
], kurirController.prototype, "change", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], kurirController.prototype, "delete", null);
kurirController = __decorate([
    (0, common_1.Controller)("kurirs"),
    __metadata("design:paramtypes", [kurirs_service_1.kurirService])
], kurirController);
exports.kurirController = kurirController;
//# sourceMappingURL=kurirs.controller.js.map