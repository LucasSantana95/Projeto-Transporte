import { useState } from 'react'
import { UserServices } from '../../Services/UserServices'
import { Button } from '../Button'
import { Input } from '../Input'
import * as S from './styles'
import { INewUser } from '../../Interfaces/INewUser'
import { useNavigate } from 'react-router-dom'

export const SignIn = () =>{
    const [newUser, setNewUser] = useState<INewUser>()
    const [createMessage, setCreateMessage] = useState<string>()
    const [isCreatedSuccessfully, setIsCreatedSuccessfully] = useState<boolean>(false)

    const navigate = useNavigate()
    const handleOnChange = (key : string,value : string) =>{
        setNewUser({...newUser , [key] : value})
    }
    const handleToggleMessage = () =>{
        setIsCreatedSuccessfully(!isCreatedSuccessfully)
    }
    const handleOnClick = async () =>{
        if(newUser){
            const response = await UserServices.registerUser(newUser)
            if(typeof response === typeof ""){
                setCreateMessage('As Senhas Precisam ser Iguais!')
                setTimeout(() => {
                    setCreateMessage('')
                }, 3000);
            }else if(response){
                setCreateMessage('Usuário Cadastrado com Sucesso!')
                handleToggleMessage()
                setTimeout(() => {
                    navigate(-1)
                }, 3000);
            }else{
                setCreateMessage('Usuário já Existe!')
                setTimeout(() => {
                    setCreateMessage('')
                }, 3000);
            }
        }
    }
    return (
        <S.Container>
            <S.Content>
                <S.Title>Resgistrar</S.Title>
                <Input inputName='user' inputType='text' label='Usuario' key='user' onChange={handleOnChange}/>
                <Input inputName='password' inputType='password' label='Senha' key='password' onChange={handleOnChange}/>
                <Input inputName='passwordConfirm' inputType='password' label='Digite a senha novamente' key='password-confirm' onChange={handleOnChange}/>
                <Button onClick={handleOnClick}>Registrar</Button>
                <S.CreateMessage success={isCreatedSuccessfully}>{createMessage}</S.CreateMessage>
            </S.Content>
        </S.Container>
    )
}