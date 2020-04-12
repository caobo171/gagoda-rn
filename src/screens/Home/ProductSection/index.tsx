import React from 'react';
import styled from 'styled-components/native';
import {CustomTheme } from '@store/theme/ThemeWrapper';
import ProductList from './ProductList';
import Touchable from '@/components/UI/Touchable';
import { ProductType } from '@/store/product/types';

const StyledWrapper = styled.View`
    padding: 8px;
`
const StyledLabel = styled.Text<{theme: CustomTheme}>`
    color: ${props=> props.theme.textColorH1};
    font-size: 20px;
    margin-bottom: 8px;
`

const StyledSeperator = styled.View<{theme: CustomTheme}>`
    height: 12px;
    width: 100%;
    background-color: ${props=> props.theme.underlayColor};
`

const StyledHeaderRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const StyledReadmore = styled.Text<{theme: CustomTheme}>`
    color: ${props=> props.theme.textColorH1};
    font-size: 16px;
    margin-bottom: 8px;
`

interface Props{
    title:string,
    products: ProductType[]
}

const ProductSection = React.memo(({title, products}: Props)=>{

    console.log('title', title, products);
    return(
        <>
       <StyledSeperator/>
        <StyledWrapper>
     
            <StyledHeaderRow>
                <StyledLabel>
                    {title}
                </StyledLabel>
                <Touchable>
                    <StyledReadmore>
                        {'Xem thêm'}
                    </StyledReadmore>
                </Touchable>
         
            </StyledHeaderRow>
          
            
            <ProductList products={products}/>
        </StyledWrapper>
        </>
    )
})


export default ProductSection;