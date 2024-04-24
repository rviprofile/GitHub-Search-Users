import styled from 'styled-components';

export const SortButton = styled.button`
    height: 50px;
    width: 200px;
    border: 3px solid #c8d4e6;
    font-size: 20px;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 30px;
    background-color: white;
    transition: all 100ms ease;
    &:hover {
        background-color: #c8d4e6;
        transition: all 100ms ease;
    }
    @media (max-width: 930px) {
        width: 150px;
        font-size: 15px;
        margin-left: 15px;
    }
`;
