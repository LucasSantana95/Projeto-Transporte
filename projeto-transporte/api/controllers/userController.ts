import { Request , Response } from "express"
import * as UserService from '../services/UserServices'

export const get = async (req: Request, res: Response) => {
    const users = await UserService.getUsers()
    res.send(users)
}
export const getById = async (req: Request, res: Response) => {
    const user = await UserService.getUsersById(req.params.id)
    res.send(user)
}
export const post = async (req : Request, res : Response) =>{
    const response = await UserService.findUser(req.body)
    if(!(typeof response == typeof "")){
        res.send(response)
    }else{
        res.send(false)
    }
}
export const create = async (req : Request, res : Response) =>{
    const response = await UserService.createUser(req.body)
    if(response){
        res.statusMessage = response
    }
    res.send(response)
}