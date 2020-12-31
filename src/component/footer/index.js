import React from 'react';
import { Container, Inner, Item, Col } from './styles/footer';


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

Footer.Col = function HomeLeft({ children, ...restProps }) {
    return <Col {...restProps}>{children}</Col>;
}
