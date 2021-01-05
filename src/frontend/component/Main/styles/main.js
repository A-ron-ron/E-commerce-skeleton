import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-areas:
  'header'
  'main'
  'footer';
grid-template-columns: 1fr;
grid-template-rows: 5rem 1fr 7rem;
height: 100%;
`;


export const Inner = styled.div`
`;

export const Item = styled.div`
`;

export const Pages = styled.div`
grid-area: main;
`;

