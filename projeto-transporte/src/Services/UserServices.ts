import { IUser } from "../Interfaces/IUser"
import { api } from "./api"
export class UserServices {
    static loginUser = async (user : IUser) =>{
        const response = await api.post('/user', user)
        if(response.data){
            return true
        }else{
            return false
        }
    }
    static registerUser = () =>{

    }
}