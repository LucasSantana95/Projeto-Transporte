import StudentModel from "../models/StudentModel";

interface IStudent {
    _id? : String,
    name: String,
    school: String,
    shift: String,
    address: String,
    value : Number,
    user : String
}

export const  getStudents = async () =>{
    const students = await StudentModel.find()
    return students
}
export const getStudentById = async (id : String) =>{
    const student = await StudentModel.findById(id)
    return student
}
export const createStudent = async (student : IStudent) =>{
    const response = await StudentModel.create(student)
    return response
}
export const updateStudent = async (changedStudent : IStudent) =>{
    const response = await StudentModel.findByIdAndUpdate(changedStudent._id,changedStudent)
    return response
}
export const deleteStudent = async (id : String) =>{
    const response = await StudentModel.findByIdAndRemove(id)
    return response
}