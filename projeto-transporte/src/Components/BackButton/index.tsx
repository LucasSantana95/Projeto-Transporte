import { Link } from 'react-router-dom'
import * as S from './styles'

export const BackButton = () =>{
    return (
        <S.Button><Link to={'/'}>Voltar</Link></S.Button>
    )
}