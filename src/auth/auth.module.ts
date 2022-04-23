import { Module } from "@nestjs/common";
import { authController } from "./auth.controller";
import { authServices } from "./auth.services";

@Module({
    controllers: [authController],
    providers: [authServices],  
})

export class authModule{

}