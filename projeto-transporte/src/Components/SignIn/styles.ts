import styled from "styled-components";
type StyleType = {
    success : boolean
}
export const Container = styled.main`

`
export const Content = styled.div`

`
export const Title = styled.h1`

`
export const CreateMessage = styled.p<StyleType>`
    background-color: ${props => props.success ? "green" : "red"};
`