import { IStudent } from '../../Interfaces/IStudent'
import { StudentServices } from '../../Services/StudentServices'
import { BackButton } from '../BackButton'
import { Button } from '../Button'
import * as S from './styles'
import { StudentContext } from "../../Contexts/StudentContext"
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const StartRoute = () => {
    const { attendingStudents, setAttendingStudents } = useContext(StudentContext)
    const navigate = useNavigate()
    
    const getStudents = async (e?: React.MouseEvent) => {
        const allStudents = (await StudentServices.getStudents()).data
        const thisUserStudents = allStudents.filter((student: IStudent) => { return student.shift === e?.target.name })
        setAttendingStudents(thisUserStudents)
        navigate('/attendingstudents')
    }
    return (
        <S.Container>
            <BackButton />
            <S.Content>
                <S.Title>Selecione o Horário Desejado</S.Title>
                <Button name='Manhã' onClick={(e) => { getStudents(e)}}>Manhã - 6:30 ~ 8:00</Button>
                <Button name='Tarde' onClick={(e) => { getStudents(e)}}>Intermediário - 11:15 ~ 13:15</Button>
                <Button name='Final' onClick={(e) => { getStudents(e)}}>Tarde - 16:30 ~ 17:30
                </Button>
            </S.Content>
        </S.Container>
    )
}