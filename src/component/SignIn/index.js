import React from 'react';
import { Container, Inner, Item, Form, List, LI, Input, Label,
            Button, Title} from './Styles/SignIn';


export default function SignInSty({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

SignInSty.Container = function SignInStyContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

SignInSty.Form = function SignInStyForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
}

SignInSty.List = function SignInStyList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

SignInSty.LI = function SignInStyLI({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>;
}

SignInSty.Input = function SignInStyInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
}

SignInSty.Label = function SignInStyLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
}

SignInSty.Button = function SignInStyButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

SignInSty.Title = function SignInStyTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}