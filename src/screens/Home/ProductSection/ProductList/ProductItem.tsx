import React from 'react';
import styled from  'styled-components/native';
import {ProductType} from '@/store/product/types';

import {CustomTheme } from '@store/theme/ThemeWrapper';


export const PRODUCT_ITEM_WIDTH = 120 ;

const StyledWrapper = styled.View`
    flex: 1;
    width: ${PRODUCT_ITEM_WIDTH}px;
    align-items: center;
`

const StyledImage = styled.Image`
    flex: 3;
    width: 100%;
    resize-mode: stretch;
`

const StyledName = styled.Text<{theme: CustomTheme}>`
    color: ${props=> props.theme.textColorH2};
    font-weight: 700;
`



interface ProductProps {
    product : ProductType
}

const ProductItem = React.memo(({product}: ProductProps)=>{
    return (
        <StyledWrapper>
            <StyledImage 
             source ={{uri: product.variants[0].images[0].imageUrl}}/>
            <StyledName>{product.name}</StyledName>
        </StyledWrapper>
    )
})


export default ProductItem;