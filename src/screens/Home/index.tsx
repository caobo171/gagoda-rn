import React, { memo } from 'react'

import styled from 'styled-components/native';
import Carousel from '@/components/Carousel';
import SearchBox from '@/components/SearchBox';

import {CustomTheme} from '@/store/theme/ThemeWrapper'
import ProductCategories from './ProductCategories'
import ProductSection from './ProductSection';

const StyledWrapper = styled.View<{theme: CustomTheme}>`
    height: 100%;
    width: 100%;
    background-color: ${props=> props.theme.backgroundColor};
`
const StyledScrollView = styled.ScrollView`

`


const Home = memo(()=>{
    return (<StyledWrapper>
        <SearchBox/>
        <StyledScrollView>
            <Carousel/>
            <ProductCategories/>
            <ProductSection/>
            <ProductSection/>
            <ProductSection/>
        </StyledScrollView>
    </StyledWrapper>)
})

export default Home;