import { Link } from 'react-router-dom'
import * as S from './styles'

export const Main = () =>{
    return (
        <S.Container>
            <S.Content>
                <S.Title>Bem Vindo</S.Title>
                <Link to={'/addstudent'}>Adicionar Novo Aluno</Link>
                <Link to={'/students'}>Lista de Alunos</Link>
                <Link to={'/startroute'}>Começar a Rota</Link>
            </S.Content>
        </S.Container>
    )
}