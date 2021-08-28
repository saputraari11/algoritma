"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kurirService = void 0;
const common_1 = require("@nestjs/common");
const kurirs_models_1 = require("./kurirs.models");
let kurirService = class kurirService {
    constructor() {
        this.kurir = [];
    }
    insert(no, nama, alamat, kurir_pengirim, tanggal_pengiriman) {
        const newkurir = new kurirs_models_1.Kurirs(no, nama, alamat, kurir_pengirim, tanggal_pengiriman);
        const kurir = Object.create(newkurir);
        this.kurir.push(kurir);
        return kurir;
    }
    get() {
        return [...this.kurir];
    }
    getId(i) {
        const pro = this.FindProdcut(i)[0];
        return Object.assign({}, pro);
    }
    change(no, nama, alamat, kurir_pengirim, tanggal_pengiriman) {
        const [kurir, index] = this.FindProdcut(no);
        const Upkurir = Object.assign({}, kurir);
        if (no) {
            Upkurir.no = no;
        }
        if (nama) {
            Upkurir.nama = nama;
        }
        if (alamat) {
            Upkurir.alamat = alamat;
        }
        ;
        if (kurir_pengirim) {
            Upkurir.kurir_pengirim = kurir_pengirim;
        }
        if (tanggal_pengiriman) {
            Upkurir.tanggal_pengiriman = tanggal_pengiriman;
        }
        this.kurir[index] = Upkurir;
    }
    del(id) {
        const i = this.FindProdcut(id)[1];
        this.kurir.splice(i, 1);
    }
    FindProdcut(i) {
        const index = this.kurir.findIndex(e => e.no == i);
        const kurir = this.kurir[index];
        if (!i) {
            throw new common_1.NotFoundException("kurir doesn't find.");
        }
        return [kurir, index];
    }
};
kurirService = __decorate([
    (0, common_1.Injectable)()
], kurirService);
exports.kurirService = kurirService;
//# sourceMappingURL=kurirs.service.js.map