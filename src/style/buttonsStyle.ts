import styled from "styled-components";

export const OpenButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: var(--color-disable);
    background-color: var(--color-white);
    width: 50px;
    &:hover{
        color: black;
    }
`
export const CheckButton = styled.button`
    border: 1px solid var(--color-grey);
    background-color: var(--color-white);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: var(--color-white);
    &:hover{
        color: var(--color-correct);
        border: 2px solid var(--color-correct);
    }
`
export const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    color: transparent;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    &:hover{
        color: var(--color-correct);
    }
`

export const ButtonFilter = styled.button`
    border: none;
    background-color:  transparent;
    border: 2px solid transparent;
    &:hover{
        border-color: var(--color-border);
        border-radius: 2px;
    }
    &.active{
        border-color: var(--color-border);
    }
`
