import styled from 'styled-components';

export const UserContainer = styled.div`
    height: 50px;
    box-sizing: content-box;
    border-radius: 20px;
    padding: 0 10px 0 5px;
    font-size: 20px;
    background-color: #e9eef5;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    color: black;
    transition: all 500ms ease;
    cursor: pointer;
    &:hover {
        background-color: #c8d4e6;
        transition: all 500ms ease;
    }
`;

export const UserImg = styled.img`
    width: 40px;
    border-radius: 15px;
`;

export const TypeOfUserImg = styled.img`
    width: 30px;
    opacity: 0.5;
`;

export const PhotoAndLoginBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;
