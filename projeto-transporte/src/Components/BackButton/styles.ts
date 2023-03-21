import styled from "styled-components";


export const Button = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 20px;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 4px;
    background-color: #1a1a1a;
    &:hover {
            border-color: #646cff;
        }
    & a {
        text-decoration: none;
        color: white;
    }
`