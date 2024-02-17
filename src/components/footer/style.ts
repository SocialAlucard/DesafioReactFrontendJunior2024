import styled from 'styled-components';

export const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    align-items: center;
    gap: 10px;

    p {
        span {
            font-weight: bold;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
