import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & a {
        width: 40%;
        padding: 2px;
        font-size: 18px;
        text-align: center;
        border: 2px solid white;
        border-radius: 10px;
        color: white;
        text-decoration: none;
        font-weight: 600;
        &:hover {
            background-color: white;
            color: #242424;
        }
    }
`
export const Title = styled.h1`

`