import styled from 'styled-components';

export const Input = styled.input`
    width: calc(100vw / 2);
    height: 50px;
    box-sizing: content-box;
    border-radius: 20px 0 0 20px;
    border: 3px solid black;
    padding-left: 20px;
    font-size: 20px;
    outline: none;
    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
    }
`;

export const SearchBox = styled.div`
    display: flex;
`;
