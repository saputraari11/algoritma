import { Module } from "@nestjs/common";
import { kurirController } from "./kurirs.controller";
import { kurirService } from "./kurirs.service";

@Module({
    controllers:[kurirController],
    providers:[kurirService],
})
export class kurirModuler{}