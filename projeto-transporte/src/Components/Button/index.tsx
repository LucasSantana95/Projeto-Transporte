import * as S from './styles'

export const Button = ({children , onClick} : {children : string , onClick : ()=> void}) =>{
    return (
        <S.Container onClick={onClick}>{children}</S.Container>
    )
}