import React from 'react';
import styled from  'styled-components/native';
import {CategoryNodeType} from '@/store/category/types';
import {CustomTheme } from '@store/theme/ThemeWrapper';


export const CATEGORY_ITEM_WIDTH = 120 ;

const StyledWrapper = styled.View`
    width: ${CATEGORY_ITEM_WIDTH}px;
    align-items: center;
    height: 132px;
`

const StyledImage = styled.Image`
    height: 120px;
    width: 120px;
    resize-mode: stretch;
`

const StyledName = styled.Text<{theme: CustomTheme}>`
    color: ${props=> props.theme.textColorH2};
    font-weight: 700;
`



interface CategoryProps {
    category : CategoryNodeType
}

const Category = React.memo(({category}: CategoryProps)=>{
    return (
        <StyledWrapper>
            <StyledImage 
             source ={{uri: category.avatar}}/>
            <StyledName>{category.name}</StyledName>
        </StyledWrapper>
    )
})


export default Category;