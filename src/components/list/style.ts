import styled from "styled-components";

export const UlListCreations = styled.ul`
    display: flex;  
    flex-direction: column;
    width: 100%;
    background-color: var(--color-white);
    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 40px;
        gap: 5px;
        padding: 10px;
        background-color: var(--color-white);
        border-bottom: 1px solid var(--color-border);
        p{
            max-width: 500px;
            width: 80%;
        }
    }
    .task{
        text-decoration: line-through;
        color: var(--color-grey);
        >button:first-of-type{
            color: var(--color-correct);
            border: 2px solid var(--color-correct);
        }
    }
`