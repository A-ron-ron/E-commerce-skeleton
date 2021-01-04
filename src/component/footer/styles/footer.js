import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.footer`
    grid-area: footer;
    background-color: #203040;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Inner = styled.div`
`;

export const Item = styled.div`
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3em;
`;

export const Link = styled(ReachRouterLink)`
color: #ffffff;
text-decoration: none;


&:hover{
    color: #ff8000;;
  }
`;