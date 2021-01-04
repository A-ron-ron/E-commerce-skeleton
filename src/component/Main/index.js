import React from 'react';
import { Container, Inner, Item, Pages} from './styles/main';


export default function MainSty({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

MainSty.Container = function MainStyContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

MainSty.Pages = function MainStyPages({ children, ...restProps }) {
    return <Pages {...restProps}>{children}</Pages>;
}
