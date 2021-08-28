import { Kurirs } from "./kurirs.models";
export declare class kurirService {
    private kurir;
    insert(no: number, nama: string, alamat: string, kurir_pengirim: string, tanggal_pengiriman: Date): Kurirs;
    get(): Kurirs[];
    getId(i: number): {
        no: number;
        nama: string;
        alamat: string;
        kurir_pengirim: string;
        tanggal_pengiriman: Date;
    };
    change(no: number, nama: string, alamat: string, kurir_pengirim: string, tanggal_pengiriman: Date): void;
    del(id: number): void;
    private FindProdcut;
}
