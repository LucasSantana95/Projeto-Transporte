import { BackButton } from '../BackButton'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StudentServices } from '../../Services/StudentServices'
import { IStudent } from '../../Interfaces/IStudent'

export const Form = ({ changedStudent }: { changedStudent: IStudent | undefined }) => {
    const [student, setStudent] = useState<IStudent | undefined>(changedStudent)

    const navigate = useNavigate()
    const handleOnChange = (key: string, value: string | number) => {
        setStudent({ ...student, [key]: value })
    }
    const handleOnClick = (e: React.MouseEvent) => {
        e.preventDefault()
        if (changedStudent && student) {
            console.log(student)
            StudentServices.updateStudent(student)
            window.alert('Aluno alterado com sucesso!')
        }
        else if (student) {
            StudentServices.setStudent(student)
            window.alert('Aluno cadastrado com sucesso!')
        }
        navigate('/')
    }
    useEffect(() => {
        console.log("changedStudent ", changedStudent);
        if (changedStudent) {
            setStudent(changedStudent)
        }
        const user = localStorage.getItem('loggedUser')
        console.log("user ", user);
        if (user) {
            setStudent({ ...student, user: user })
        }
    }, [])
    return (
        <S.Container>
            <BackButton />
                    <S.Content>
                        <S.Title>Adicione um Novo Aluno</S.Title>
                        <S.SubTitle>*Todos os Campos são Obrigatórios</S.SubTitle>
                        <S.Input>
                            <label>Nome Completo:</label>
                            <input type={'text'} id='name' value={student?.name} onChange={(e) => { handleOnChange(e.target.id, e.target.value) }} />
                        </S.Input>
                        <S.Input>
                            <label>Escola:</label>
                            <input type={'text'} id='school' value={student?.school} onChange={(e) => { handleOnChange(e.target.id, e.target.value) }} />
                        </S.Input>
                        <S.Input>
                            <label>Turno:</label>
                            <select id='shift' value={student?.shift} onChange={(e) => { handleOnChange(e.target.id, e.target.value) }}>
                                <option>Selecione o Turno</option>
                                <option value={'Manhâ'}>Manhâ</option>
                                <option value={'Tarde'}>Tarde</option>
                            </select>
                        </S.Input>
                        <S.Input>
                            <label>Endereço:</label>
                            <input type={'text'} id={'address'} value={student?.address} onChange={(e) => { handleOnChange(e.target.id, e.target.value) }} />
                        </S.Input>
                        <S.Input>
                            <label>Valor da Mensalidade: </label>
                            <input type={'number'} id={'value'} value={student?.value} onChange={(e) => { handleOnChange(e.target.id, e.target.value) }} />
                        </S.Input>
                        <S.Button onClick={(e) => { handleOnClick(e) }}>Cadastrar</S.Button>
                    </S.Content>
        </S.Container>
    )
}