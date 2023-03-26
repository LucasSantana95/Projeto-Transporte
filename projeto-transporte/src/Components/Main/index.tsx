import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './styles'

export const Main = () =>{
    const [user, setUser] = useState<string>('')
    const navigate = useNavigate()
    const handleOnClick = () =>{
        localStorage.removeItem('logged')
        localStorage.removeItem('loggedUser')
        navigate('/')
    }
    useEffect(()=>{
        if(localStorage.getItem('logged') === 'true'){
            const user = localStorage.getItem('loggedUser')
            if(user){
                setUser(user)
            }
        }else{
            navigate('/')
        }
    },[])
    return (
        <S.Container>
            <button onClick={handleOnClick}>Sair</button>
            <S.Content>
                <S.Title>Bem Vindo {user}</S.Title>
                <Link to={'/addstudent'}>Adicionar Novo Aluno</Link>
                <Link to={'/students'}>Lista de Alunos</Link>
                <Link to={'/startroute'}>Começar a Rota</Link>
            </S.Content>
        </S.Container>
    )
}