import { Injectable, NotFoundException} from "@nestjs/common";
import { Kurirs } from "./kurirs.models";

@Injectable()
export class kurirService{
    private kurir:Kurirs[]=[]
    insert( no:number,nama:string,alamat:string,kurir_pengirim:string,tanggal_pengiriman:Date){
        const newkurir=new Kurirs(no,nama,alamat,kurir_pengirim,tanggal_pengiriman)
        const kurir:Kurirs = Object.create(newkurir)
        this.kurir.push(kurir)
        return kurir
    }
    get(){
        return [...this.kurir]
    }
    getId(i:number){
        const pro = this.FindProdcut(i)[0]
        return {...pro}
    }
    change(no:number,nama:string,alamat:string,kurir_pengirim:string,tanggal_pengiriman:Date){
        const [kurir,index]= this.FindProdcut(no)
        const Upkurir = {...kurir}
        if(no){Upkurir.no=no}
        if(nama){Upkurir.nama=nama}
        if(alamat){Upkurir.alamat=alamat};
        if(kurir_pengirim){Upkurir.kurir_pengirim=kurir_pengirim}
        if(tanggal_pengiriman){Upkurir.tanggal_pengiriman=tanggal_pengiriman}
        this.kurir[index]=Upkurir
    }
    del(id:number){
        const i = this.FindProdcut(id)[1]
        this.kurir.splice(i,1)
    }
    private FindProdcut(i:number):[Kurirs,number]{
        const index= this.kurir.findIndex(e=>e.no==i)
        const kurir= this.kurir[index]
        if(!i){
            throw new NotFoundException("kurir doesn't find.")
        }
        return [kurir,index]
    }
}