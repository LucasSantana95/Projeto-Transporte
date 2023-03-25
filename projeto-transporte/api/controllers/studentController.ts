import { Request , Response } from "express"
import * as studentServices from '../services/StudentServices'

export const get = async (req: Request, res: Response) => {
    const students = await studentServices.getStudents()
    res.send(students)
}
export const getById = async (req: Request, res: Response) => {
    const student = await studentServices.getStudentById(req.params.id)
    res.send(student)
}
export const post = async (req: Request, res: Response) => {
    const newStudent = await studentServices.createStudent(req.body)
    res.send(newStudent)
}
export const put = async (req: Request, res: Response) => {
    const student = req.body
    console.log("student ", student);
    const changedStudent = await studentServices.updateStudent(student)
    console.log("changedStudent ", changedStudent);
    res.send(changedStudent)
}
export const deleteStudent = async (req: Request, res: Response) => {
    const deletedStudent = await studentServices.deleteStudent(req.params.id)
    res.send(deletedStudent)
}