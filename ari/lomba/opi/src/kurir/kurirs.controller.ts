import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { kurirService } from "./kurirs.service";

@Controller("kurirs")
export class kurirController{
    constructor(private readonly kurirService:kurirService){}
    @Post()
    addProduct(
       @Body("no") no:number,
        @Body("name") nama:string,
        @Body("alamat") alamat:string,
        @Body("kurir") kurir_pengirim:string,
        @Body("tanggal") tanggal_pengiriman:Date
    ){
        const data=this.kurirService.insert(no,nama,alamat,kurir_pengirim,tanggal_pengiriman)
        return{data:data}
    }

    @Get("/info")
    infoProduct(){
        return this.kurirService.get()
    }
    @Get("/info/:id_product")
    getId(@Param("id_product") id:number){
        return this.kurirService.getId(id)
    }
    @Patch(":id")
    change(
        @Body("no") no:number,
        @Body("name") nama:string,
        @Body("alamat") alamat:string,
        @Body("kurir") kurir_pengirim:string,
        @Body("tanggal") tanggal_pengiriman:Date
        ){
        this.kurirService.change(no,nama,alamat,kurir_pengirim,tanggal_pengiriman)
        return "success"
    }
    @Delete(":id")
    delete(   
             @Param("id") id:number
    ){
        this.delete(id)
        return null
    }
}