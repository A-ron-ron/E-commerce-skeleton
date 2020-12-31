import React from 'react';
import { Container, Inner, Item, LI, Product, Image, Name, Price, Rating } from './styles/home';


export default function Home({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Home.Container = function HomeContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Home.LI = function HomeLI({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>;
}

Home.Product = function HomeProduct({ children, ...restProps }) {
    return <Product {...restProps}>{children}</Product>;
}

Home.Image = function HomeImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Home.Name = function HomeName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}

Home.Price = function HomePrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>;
}

Home.Rating = function HomeRating({ children, ...restProps }) {
    return <Rating {...restProps}>{children}</Rating>;
}