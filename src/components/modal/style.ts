import styled from "styled-components";


export const DivModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
        background-color: var(--color-primary);
        padding: 1rem 0.5rem;
        border-radius: 5px;
        gap: 1rem;
        >div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            >button{
                border: none;
                background-color: transparent;
                font-size: 20px;
                padding: 0;
            }
        }
        >button{
            width: 90px;
            height: 25px;
            color: var(--color-big-text);
            border: 2px solid var(--color-border);
            border-radius: 4px;
            &:hover{
                border: 2px solid var(--color-big-text);
                transition: 2s;
            }
        }
        >input{
            width: 100%;
            height: 2rem;
            background-color: var(--color-white);
            border: none;
            outline: none;
            border-radius: 5px;
                &::placeholder{
                    color: var(--color-border);
                    font-style: italic;
                }
        }
    } 
`
