import { useEffect, useState } from 'react'
import { IUser } from '../../Interfaces/IUser'
import { UserServices } from '../../Services/UserServices'
import { Button } from '../Button'
import { Input } from '../Input'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export const Login = () =>{
    const [user, setUser] = useState<IUser>()
    const [loginMessage, setLoginMessage] = useState<String>()
    const [isLoggedSuccessfully, setIsLoggedSuccessfully] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleOnChange = (key : string, value : string) =>{
        setUser({...user, [key] : value})
    }
    const handleToggleLogged = () =>{
        setIsLoggedSuccessfully(!isLoggedSuccessfully)
    }
    const handleOnClick = async () =>{
        if(user){
            if(await UserServices.loginUser(user)){
                setLoginMessage("Logado com sucesso!")
                handleToggleLogged()
                setTimeout(() => {
                    localStorage.setItem('logged', "true")
                    localStorage.setItem('loggedUser', user.user ? user.user : '')
                    navigate('/home')
                }, 3000);
            }else{
                setLoginMessage("Usuário ou Senha incorretos!")
                setTimeout(() => {
                    setLoginMessage('')
                }, 3000);
            }
        }
    }
    useEffect(()=>{
        const isLogged = localStorage.getItem('logged')
        if(isLogged === "true"){
            navigate('/home')
        }
    },[])
    return (
        <S.Container>
            <S.Content>
                <S.Title>Login</S.Title>
                <Input inputType='text' inputName='user' key='user' label='Usuário: ' onChange={handleOnChange}/>
                <Input inputType='password' inputName='password' key='password' label='Senha: ' onChange={handleOnChange}/>
                <S.LoginMessage loginTheme={isLoggedSuccessfully}>{loginMessage}</S.LoginMessage>
                <Button onClick={handleOnClick}>Entrar</Button>
            </S.Content>
        </S.Container>
    )
}