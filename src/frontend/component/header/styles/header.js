import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.header`
grid-area: header;
background-color: #203040;
color: #ffffff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;
`;


export const Inner = styled.div`
`;

export const Item = styled.div`
`;

export const Brand = styled.div`
display: flex;
width: 80%;

`;

export const Button = styled.div`

`;

export const Links = styled.div`

`;

export const Link = styled(ReachRouterLink)`
color: #ffffff;
text-decoration: none;
padding: 1rem;


&:hover{
    color: #ff8000;;
  }
`;

export const LinkTitle = styled(ReachRouterLink)`
color: #ffffff;
align-self: center;
margin: auto;
text-decoration: none;
padding: 1rem;
font-size: 3rem;
font-weight: bold;


&:hover{
    color: #ff8000;;
  }
`;