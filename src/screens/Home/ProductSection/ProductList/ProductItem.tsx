import React from 'react';
import styled from  'styled-components/native';
import {ProductType} from '@/store/product/types';

import {CustomTheme } from '@store/theme/ThemeWrapper';


export const PRODUCT_ITEM_WIDTH = 120 ;

const StyledWrapper = styled.View`
    flex: 1;
    width: ${PRODUCT_ITEM_WIDTH}px;
    align-items: flex-start;
`

const StyledImage = styled.Image`
    height: 120px;
    width: 120px;
    resize-mode: stretch;
`

const StyledName = styled.Text<{theme: CustomTheme}>`
    color: ${props=> props.theme.textColorH2};
    font-weight: 400;
    margin-top: 8px;
    font-size: 12px;
`



interface ProductProps {
    product : ProductType
}

const ProductItem = React.memo(({product}: ProductProps)=>{
    return (
        <StyledWrapper>
            {/* <StyledImage 
             source ={{uri: product.variants[0].images[0].imageUrl}}/> */}
            <StyledName>{product.name}</StyledName>
        </StyledWrapper>
    )
})


export default ProductItem;