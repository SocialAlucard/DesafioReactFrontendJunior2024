import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
        background: var(--color-primary);
    } 

    :root{
        --color-primary: #F5F5F5;
        --color-text: #D3D3D3;
        --color-big-text: #BA4349;
        --color-white: #FFFFFF;
        --color-border: #E0E0E0;
        --color-buttom-border: #F9F9F9;
        --color-disable: #E5E5E5;
        --color-correct: #86CFC1;
        --color-filter: #808080;
        --color-footer: #666666;
        --color-shadow: #EDEDED; 
        --color-grey: #E7E7E7;
    }
`   