import React, { memo } from 'react'

import styled from 'styled-components/native';
import Carousel from '@/components/Carousel';
import SearchBox from '@/components/SearchBox';

import { CustomTheme } from '@/store/theme/ThemeWrapper'
import ProductCategories from './ProductCategories'
import ProductSection from './ProductSection';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import { getNewestProducts, getBestsellerProducts, getSaleProducts } from '@/store/product/functions';
import { RefreshControl } from 'react-native';
import { useCategoryWithTree } from '@/store/category/hooks';
import { useNewestProducts, useSaleProducts, useBestsellerProducts } from '@/store/product/hooks';
import { getCategoryWithTree } from '@/store/category/functions';

const StyledWrapper = styled.View<{ theme: CustomTheme }>`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.backgroundColor};
`
const StyledScrollView = styled.ScrollView`

`


const Home = memo(() => {

    const [loading, refresh] = useAsyncFn(async () => {
        const res = await getCategory();
        console.log(res);
        await getNewest();
        await getBestseller();
        await getSale();

    })

    const [newestLoading, getNewest] = useAsyncFn(getNewestProducts);
    const [sellLoading, getBestseller] = useAsyncFn(getBestsellerProducts);
    const [saleLoading, getSale] = useAsyncFn(getSaleProducts);
    const [categoryLoading, getCategory] = useAsyncFn(getCategoryWithTree)
    const categoriesWithTree = useCategoryWithTree();
    const newestProducts = useNewestProducts();
    const saleProducts = useSaleProducts();
    const bestsellerProducts = useBestsellerProducts();


    console.log(newestProducts, saleProducts, bestsellerProducts);
    return (<StyledWrapper>
        <SearchBox />
        <StyledScrollView
            refreshControl={
                <RefreshControl
                    refreshing={loading.loading}
                    onRefresh={refresh}
                />
            }
        >
            <Carousel />
            <ProductCategories categories={categoriesWithTree} />
            <ProductSection 
                title ={'Sản phẩm mới nhất'}
                products = {newestProducts}
            />
            <ProductSection 
                title = {'Đang Khuyến Mãi'}
                products = {saleProducts}
            />
            <ProductSection 
                title = {'Bán chạy nhất'}
                products = {bestsellerProducts}
            />
        </StyledScrollView>
    </StyledWrapper>)
})

export default Home;