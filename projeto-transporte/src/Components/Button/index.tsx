import React from 'react'
import * as S from './styles'

export const Button = ({children} : {children : string}) =>{
    return (
        <S.Container>{children}</S.Container>
    )
}