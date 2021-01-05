import React from 'react';
import { Container, Inner, Item, Brand, Button, Links, Link, LinkTitle } from './styles/header';


export default function Header({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Brand = function HeaderBrand({ children, ...restProps }) {
    return <Brand {...restProps}>{children}</Brand>;
}

Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

Header.Links = function HeaderLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>;
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Header.LinkTitle = function HeaderLinkTitle({ children, ...restProps }) {
    return <LinkTitle {...restProps}>{children}</LinkTitle>;
}