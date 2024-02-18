import styled from "styled-components";

export const DivFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-self: start;
    align-items: center;
    height: 40px;
    padding: 10px 10px;
    justify-content: space-between;
    border-top: 1px solid var(--color-border); 
    width: 100%;
    
    div{
        display: flex;
        flex-direction: row;
        max-width: 200px;
        width: 100%;
        justify-content: space-between;
    }
`  