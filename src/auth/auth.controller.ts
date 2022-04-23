import { Controller, Post } from "@nestjs/common";
import { authServices } from "./auth.services";



@Controller('auth')
export class authController{
    constructor(private authService: authServices){

    }

    @Post('login')
    login(){
        return this.authService.login();
    }

    @Post('signup')
    signup(){
        return this.authService.signup();
    }
}