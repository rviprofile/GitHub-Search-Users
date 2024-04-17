import styled from 'styled-components';

export const PaginationBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const PaginationItem = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 20px;
    background-color: #e9eef5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
        background-color: #c8d4e6;
        transition: all 500ms ease;
    }
`;

export const ActivePaginationItem = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 20px;
    background-color: #c8d4e6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 500ms ease;
`;
