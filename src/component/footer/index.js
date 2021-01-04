import React from 'react';
import { Container, Inner, Item, Col, Link } from './styles/footer';


export default function Footer({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Col = function FooterCol({ children, ...restProps }) {
    return <Col {...restProps}>{children}</Col>;
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}
