import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
padding: 1rem;
`;


export const Inner = styled.div`
`;

export const Item = styled.div`
`;

export const ImageCont = styled.div`
flex: 2 1 60rem;
`;

export const Image = styled.img`
max-width: 60rem;
width: 100%;
`;

export const Details = styled.div`
flex: 1 1 30rem;
`;

export const Name = styled.h4`
`;

export const Li = styled.li`
margin-bottom: 1rem;
`;

export const List = styled.ul`
list-style-type: none;
padding: 0;
`;

export const Action = styled.div`
flex: 1 1 30rem;
border: 0.1rem #808080 solid;
border-radius: 0.5rem;
background-color: #f8f8f8;
padding: 1rem;
`;

export const ButtonP = styled.button`
padding: 1rem;
border: 0.1rem #808080 solid;
border-radius: 0.5rem;
cursor: pointer;
background-color: #f0c040;

&:hover{
    border: 0.1rem #404040 solid;
  }
`;