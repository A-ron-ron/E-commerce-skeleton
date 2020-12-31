import styled from 'styled-components';

export const Container = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;


export const Inner = styled.div`
`;

export const Item = styled.div`
`;

export const LI = styled.li`
list-style-type: none;
padding: 0;
flex: 0 1 34rem;
margin: 1rem;
height: 50rem;
border-bottom: 0.1rem #c0c0c0 solid;
`;


export const Product = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

export const Image = styled.img`
max-width: 34rem;
max-height: 34rem;
`;

export const Name = styled.div`
font-size: 2rem;
font-weight: bold;
`;

export const Price = styled.div`
font-size: 2rem;
font-weight: bold;
`;

export const Rating = styled.div`
margin-bottom: 1rem;
`;