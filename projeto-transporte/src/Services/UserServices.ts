import { IUser } from "../Interfaces/IUser"
import { api } from "./api"
import { INewUser } from "../Interfaces/INewUser"

export class UserServices {
    static loginUser = async (user : IUser) =>{
        const response = await api.post('/user', user)
        if(response.data){
            return true
        }else{
            return false
        }
    }
    static registerUser = async (newUser : INewUser) =>{
        if(newUser.password !== newUser.passwordConfirm){
            return "As senhas precisam ser iguais"
        }else{
            const response = (await api.post('./create-user', newUser)).data
            if( response === "OK"){
                return true
            }else{
                return false
            }
        }
    }
}