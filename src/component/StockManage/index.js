import React from 'react';
import { Container, Inner, Item, ProdHead, Button, 
        TableBodyList, TableBodyLI, TableHeader, Table, Form, FormList, FormLI,
         FormInput, Label, Title, SubTitle, FormMain, ExisStock, 
         TableHead, TableHeadList, TableBody, TableActions } from './styles/StockManage';


export default function StockManSty({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

StockManSty.Container = function StockManStyContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

StockManSty.ProdHead = function StockManStyProdHead({ children, ...restProps }) {
    return <ProdHead {...restProps}>{children}</ProdHead>;
}


StockManSty.Button = function StockManStyButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

StockManSty.Table = function StockManStyTable({ children, ...restProps }) {
    return <Table {...restProps}>{children}</Table>;
}

StockManSty.TableHeader = function StockManStyTableHeader({ children, ...restProps }) {
    return <TableHeader {...restProps}>{children}</TableHeader>;
}

StockManSty.TableBodyList = function StockManStyTableBodyList({ children, ...restProps }) {
    return <TableBodyList {...restProps}>{children}</TableBodyList>;
}

StockManSty.TableBodyLI = function StockManStyTableBodyLI({ children, ...restProps }) {
    return <TableBodyLI {...restProps}>{children}</TableBodyLI>;
}

StockManSty.Form = function StockManStyForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
}

StockManSty.FormList = function StockManStyFormList({ children, ...restProps }) {
    return <FormList {...restProps}>{children}</FormList>;
}

StockManSty.FormLI = function StockManStyFormLI({ children, ...restProps }) {
    return <FormLI {...restProps}>{children}</FormLI>;
}

StockManSty.FormInput = function StockManStyFormInput({ children, ...restProps }) {
    return <FormInput {...restProps}>{children}</FormInput>;
}

StockManSty.Label = function StockManStyLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
}

StockManSty.Title = function StockManStyTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

StockManSty.SubTitle = function StockManStySubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

StockManSty.FormMain = function StockManStyFormMain({ children, ...restProps }) {
    return <FormMain {...restProps}>{children}</FormMain>;
}

StockManSty.ExisStock = function StockManStyExisStock({ children, ...restProps }) {
    return <ExisStock {...restProps}>{children}</ExisStock>;
}

StockManSty.TableHead = function StockManStyTableHead({ children, ...restProps }) {
    return <TableHead {...restProps}>{children}</TableHead>;
}

StockManSty.TableHeadList = function StockManStyTableHeadList({ children, ...restProps }) {
    return <TableHeadList {...restProps}>{children}</TableHeadList>;
}

StockManSty.TableBody = function StockManStyTableBody({ children, ...restProps }) {
    return <TableBody {...restProps}>{children}</TableBody>;
}

StockManSty.TableActions = function StockManStyTableActions({ children, ...restProps }) {
    return <TableActions {...restProps}>{children}</TableActions>;
}