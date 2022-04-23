import { Injectable } from "@nestjs/common";

@Injectable({

})
export class authServices{
    login(){
        return {message: 'I have logged in'};
    }
    signup(){
        return {message: 'I have signed up'};
    }
}