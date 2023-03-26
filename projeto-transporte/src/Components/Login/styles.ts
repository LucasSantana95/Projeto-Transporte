import styled from "styled-components";

type StyleType = {
    loginTheme : boolean
}

export const Container = styled.main`

`
export const Content = styled.div`

`
export const Title = styled.h1`

`
export const LoginMessage = styled.p<StyleType>`
    background-color: ${props => props.loginTheme ? "green" : "red"};
`