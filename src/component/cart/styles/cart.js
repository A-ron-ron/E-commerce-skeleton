import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
margin: 1rem;
align-items: flex-start;
`;


export const Inner = styled.div`
`;

export const Item = styled.div`
`;

export const ListContainer = styled.div`
flex: 3 1 60rem;
`;


export const List = styled.ul`
padding: 0;
list-style-type: none;
padding: 1rem;
`;

export const LI = styled.li`
display: flex;
justify-content: space-between;
padding-bottom: 1rem;
margin-bottom: 1rem;
border-bottom: 0.1rem #c0c0c0 solid;
`;

export const ImageCont = styled.div`
flex: 1 1;
`;

export const Image = styled.img`
max-width: 10rem;
max-height: 10rem;
`;

export const Name = styled.div`
flex: 8 1;
`;

export const Price = styled.div`
flex: 1 1;
font-size: 2.5rem;
text-align: right;
`;

export const Action = styled.div`
flex: 1 1 20rem;
background-color: #f0f0f0;
border-radius: 0.5rem;
padding: 1rem;
`;

export const Button = styled.button`
padding: 1rem;
border: 0.1rem #808080 solid;
border-radius: 0.5rem;
cursor: pointer;

&:hover{
    border: 0.1rem #404040 solid;
  }
`;

export const Text = styled.h3`
`;