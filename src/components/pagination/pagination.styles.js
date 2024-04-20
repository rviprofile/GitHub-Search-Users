import styled from 'styled-components';

export const PaginationBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    max-width: calc(120px + (100vw / 2));
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
    height: 55px;
    width: 55px;
    border-radius: 20px;
    background-color: #c8d4e6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 500ms ease;
`;

export const MoveImg = styled.img`
    height: 35px;
    width: 35px;
    opacity: 0.7;
`;
