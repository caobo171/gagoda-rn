import React from 'react';
import styled from 'styled-components/native';
import {CustomTheme } from '@store/theme/ThemeWrapper';
import ProductList from './ProductList';
import Touchable from '@/components/UI/Touchable';

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
    text-decoration-line : underline;
`

const ProductSection = React.memo(()=>{
    return(
        <>
       <StyledSeperator/>
        <StyledWrapper>
     
            <StyledHeaderRow>
                <StyledLabel>
                    {'Danh muc'}
                </StyledLabel>
                <Touchable>
                    <StyledReadmore>
                        {'Xem them'}
                    </StyledReadmore>
                </Touchable>
         
            </StyledHeaderRow>
          
            
            <ProductList/>
        </StyledWrapper>
        </>
    )
})


export default ProductSection;