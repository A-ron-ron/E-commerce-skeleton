import React from 'react';
import { Container, Inner, Item, ListContainer, List, LI, 
        ImageCont, Image, Name, Price, Action, Button, Text } from './styles/cart';


export default function Cart({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Cart.Container = function CartContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Cart.ListContainer = function CartListContainer({ children, ...restProps }) {
    return <ListContainer {...restProps}>{children}</ListContainer>;
}

Cart.List = function CartList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

Cart.LI = function CartLI({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>;
}

Cart.ImageCont = function CartImageCont({ children, ...restProps }) {
    return <ImageCont {...restProps}>{children}</ImageCont>;
}

Cart.Image = function CartImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Cart.Name = function CartName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}

Cart.Price = function CartPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>;
}

Cart.Action = function CartAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>;
}

Cart.Button = function CartButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

Cart.Text = function CartText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}