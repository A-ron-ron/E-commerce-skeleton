import React from 'react';
import { Container, Inner, Item, LI, Product, Image, Name, Price, Rating } from './styles/home';


export default function HomeSty({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

HomeSty.Container = function HomeStyContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

HomeSty.LI = function HomeStyLI({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>;
}

HomeSty.Product = function HomeStyProduct({ children, ...restProps }) {
    return <Product {...restProps}>{children}</Product>;
}

HomeSty.Image = function HomeStyImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

HomeSty.Name = function HomeStyName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}

HomeSty.Price = function HomeStyPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>;
}

HomeSty.Rating = function HomeStyRating({ children, ...restProps }) {
    return <Rating {...restProps}>{children}</Rating>;
}