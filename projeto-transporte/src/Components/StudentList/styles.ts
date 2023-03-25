import styled from "styled-components";


export const Container = styled.main`

`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    & section {
        border: 2px solid white;
        border-radius: 10px;
        margin: 4px;
        background-color: #101010;
        padding: 0px 10px;
        & p {
            border-bottom: 1px solid white;
            margin: 5px;
        }
    }
`
export const Title = styled.h1`

`