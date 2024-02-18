import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 530px;
    gap: 20px;

    >div:first-of-type{
        display: flex;
        border-radius: 16px;
        justify-content: center;
        width: 100%;
        height: fit-content;
        background-color: var(--color-shadow);
    }
`