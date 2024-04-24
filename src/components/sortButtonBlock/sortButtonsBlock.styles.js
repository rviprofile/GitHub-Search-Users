import styled from 'styled-components';

export const SortButtonsBlock = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1440px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`;
