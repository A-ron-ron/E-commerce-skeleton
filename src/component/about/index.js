import React from 'react';
import { Container, Inner, Item, Title, Text, List, LI, Form, Input, Label, Button} from './styles/about';


export default function AboutSty({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

AboutSty.Container = function AboutStyContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

AboutSty.Title = function AboutStyTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

AboutSty.Text = function AboutStyText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

AboutSty.List = function AboutStyList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

AboutSty.LI = function AboutStyLI({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>;
}

AboutSty.Form = function AboutStyForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
}

AboutSty.Input = function AboutStyInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
}

AboutSty.Label = function AboutStyLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
}

AboutSty.Button = function AboutStyButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}