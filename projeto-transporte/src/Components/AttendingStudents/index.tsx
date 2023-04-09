import * as S from './styles'
import { useContext } from 'react'
import { StudentContext } from '../../Contexts/StudentContext'

export const AttendingStudents = () =>{
    const {attendingStudents} = useContext(StudentContext)
    console.log("attendingStudents ", attendingStudents);

    return (
        <S.Container>
            <S.Content>
                <h1> teste </h1>
                {attendingStudents && attendingStudents.map((students)=>( 
                    <p key={students._id}>{students.name}</p>
                ))}
            </S.Content>
        </S.Container>
    )
}