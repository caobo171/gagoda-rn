import React from 'react';
import styled from 'styled-components/native';

import ProductList from './ProductList';

const StyledWrapper = styled.View``


const ProductSection = React.memo(()=>{
    return(
        <StyledWrapper>
            <ProductList/>
        </StyledWrapper>
    )
})


export default ProductSection;