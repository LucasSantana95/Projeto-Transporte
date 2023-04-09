import React, { MouseEventHandler } from 'react'
import * as S from './styles'

export const Button = ({children , onClick, name} : {children : string , onClick : (e? : React.MouseEvent)=> void, name? : string}) =>{
    return (
        <S.Container name={name} onClick={onClick}>{children}</S.Container>
    )
}