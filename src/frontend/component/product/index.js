import React from 'react';
import { Container, Inner, Item, ImageCont, Image, Details, Name, Li, List, Action, ButtonP} from './styles/product';


export default function ProductComp({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

ProductComp.Container = function ProductContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

ProductComp.ImageCont = function ProductImageCont({ children, ...restProps }) {
    return <ImageCont {...restProps}>{children}</ImageCont>;
}

ProductComp.Image = function ProductImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

ProductComp.Details = function ProductDetails({ children, ...restProps }) {
    return <Details {...restProps}>{children}</Details>;
}

ProductComp.Name = function ProductName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}

ProductComp.Li = function ProductLi({ children, ...restProps }) {
    return <Li {...restProps}>{children}</Li>;
}

ProductComp.List= function ProductList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

ProductComp.Action= function ProductAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>;
}

ProductComp.ButtonP= function ProductButtonP({ children, ...restProps }) {
    return <ButtonP {...restProps}>{children}</ButtonP>;
}