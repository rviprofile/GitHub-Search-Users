import styled from 'styled-components';

export const ModalSortBlock = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const SortButtton = styled.button`
    height: 50px;
    width: 200px;
    border: 3px solid #c8d4e6;
    font-size: 20px;
    outline: none;
    position: relative;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
    transition: all 100ms ease;
    color: #667;
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

export const ModalList = styled.div`
    width: 200px;
    margin-top: 5px;
    position: absolute;
    background-color: white;
    border: 3px solid #c8d4e6;
    border-radius: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalListItem = styled.div`
    opacity: 1;
    height: 50px;
    width: 200px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 15px 15px;
    background-color: ${(props) => (props.isChoose ? '#c8d4e6' : '')};
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
