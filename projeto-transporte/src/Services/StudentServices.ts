import { IStudent } from "../Interfaces/IStudent"
import { api } from "./api"

export class StudentServices {
    static getStudents = () =>{
        return api.get('/student')
    }
    static getStudentsById = (id : string) =>{
        return api.get(`/student/${id}`)
    }
    static setStudent = (student : IStudent) =>{
        return api.post('/student', student)
    }
    static updateStudent = ( student : IStudent) =>{
        return api.put('/student', student)
    }
    static deleteStudent = (id : string) =>{
        return api.delete(`/student/${id}`)
    }
}