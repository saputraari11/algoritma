import { kurirService } from "./kurirs.service";
export declare class kurirController {
    private readonly kurirService;
    constructor(kurirService: kurirService);
    addProduct(no: number, nama: string, alamat: string, kurir_pengirim: string, tanggal_pengiriman: Date): {
        data: import("./kurirs.models").Kurirs;
    };
    infoProduct(): import("./kurirs.models").Kurirs[];
    getId(id: number): {
        no: number;
        nama: string;
        alamat: string;
        kurir_pengirim: string;
        tanggal_pengiriman: Date;
    };
    change(no: number, nama: string, alamat: string, kurir_pengirim: string, tanggal_pengiriman: Date): string;
    delete(id: number): any;
}
