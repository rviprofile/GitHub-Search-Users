import styled from 'styled-components';

export const UserContainer = styled.div`
    height: ${(props) => (props.isactive ? '150px' : '50px')};
    box-sizing: content-box;
    border-radius: 20px;
    padding: ${(props) =>
        props.isactive ? '5px 10px 5px 10px' : '0 10px 0 5px'};
    font-size: 20px;
    background-color: #e9eef5;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    color: black;
    transition: all 100ms ease;
    cursor: pointer;
    &:hover {
        background-color: #c8d4e6;
        transition: all 100ms ease;
    }
    @media (max-width: 1150px) {
        height: ${(props) => (props.isactive ? '250px' : '50px')};
    }
    @media (max-width: 660px) {
        flex-direction: ${(props) => (props.isactive ? 'column' : 'row')};
        align-items: ${(props) => (props.isactive ? 'flex-start' : 'center')};
        height: ${(props) => (props.isactive ? '450px' : '50px')};
    }
`;

export const UserImg = styled.img`
    width: ${(props) => (props.isactive ? '140px' : '40px')};
    border-radius: 15px;
    transition: all 100ms ease;
`;

export const TypeOfUserImg = styled.img`
    width: 30px;
    opacity: 1;
`;

export const PhotoAndLoginBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    @media (max-width: 660px) {
        flex-direction: ${(props) => (props.isactive ? 'column' : 'row')};
        align-items: ${(props) => (props.isactive ? 'flex-start' : 'center')};
        gap: 7px;
    }
`;

export const Link = styled.a`
    paddind: 5px 5px 5px 5px;
    width: 220px;
    height: 50px;
    border: 3px solid black;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background-color: white;
    }
`;

export const LoginAndLinkBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: ${(props) => (props.isactive ? '30px' : '')};
`;

export const DescriptionBlock = styled.div`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    color: rgb(102, 102, 119);
    margin-left: 20px;
`;
