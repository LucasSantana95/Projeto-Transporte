import * as S from './styles'
import { StudentListNode } from '../StudentListNode'
import { StudentServices } from '../../Services/StudentServices'
import { useEffect, useState } from 'react'
import { IStudent } from '../../Interfaces/IStudent'
import { BackButton } from '../BackButton'

export const StudentList = () =>{
    const [students, setStudents] = useState<IStudent[]>()
    
    useEffect(()=>{
        const getStudents = async () =>{
            const allStudents = (await StudentServices.getStudents()).data
            setStudents(allStudents)
        }
        getStudents()
    },[])
    useEffect(()=>{
        console.log(students)
    },[students])
    return (
        <S.Container>
            <BackButton/>
            <S.Content>
                {   students 
                    && 
                    students.map(
                        student=>(
                                <StudentListNode    item={student} 
                                                    key={student._id}/>
                            ))
                }
            </S.Content>
        </S.Container>
    )
}