import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: fit-content;
    border: 1px solid var(--color-border);
    position: relative;
    box-shadow: 0px 2px #00000010;
    &::before{
        content: "";
        width: 490px;
        background-color: var(--color-buttom-border);
        border: 1px solid var(--color-border);
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 2px #00000010;
    }
    &::after{
        content: "";
        width: 480px;
        background-color: var(--color-buttom-border);
        border: 1px solid var(--color-border);
        height: 100%;
        position: absolute;
        z-index: -2;
        top: 10px;
        right: 50%;
        transform: translateX(+50%);
        box-shadow: 0px 2px #00000010;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: row;;
    width: 100%;
    border-bottom: 1px solid var(--color-border);
`   

export const InputStyle = styled.input`
    width: 100%;
    height: 50px;
    font-size: 15px;
    background-color: var(--color-white);
    border: none;
    outline: none;
    &::placeholder{
        color: var(--color-border);
        font-style: italic;
    }
`   