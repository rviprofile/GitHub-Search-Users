import styled from 'styled-components';

export const Block = styled.div`
    color: #667;
    width: calc(120px + (100vw / 2));
    display: ${(props) => (props.loading ? 'none' : 'flex')};
    flex-direction: column;  
`;

export const Loader = styled.img`
    margin-top: 100px;
    margin-bottom: 100px;
    display: ${(props) => (props.loading ? 'block' : 'none')};
`;
