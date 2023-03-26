import UserModel from "../models/UserModel";

interface IUser {
    user : string,
    password : string
}

export const  getUsers = async () =>{
    const users = await UserModel.find()
    return users
}
export const getUsersById = async (id : String) =>{
    const user = await UserModel.findById(id)
    return user
}
export const findUser = async (user : IUser) => {
    const response = await UserModel.findOne({user : user.user, password : user.password})
    if(response){
        return response
    }else{
        return "Usuário incorreto"
    }
}
export const createUser = async (user : IUser) =>{
    const response = await UserModel.findOne({user : user.user})
    if(response){
        return "Error"
    }
    const createdUser = await UserModel.create(user)
    if(createdUser){
        return "OK"
    }
}