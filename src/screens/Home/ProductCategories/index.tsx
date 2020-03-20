import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Category, {CATEGORY_ITEM_WIDTH} from './Category';
import useAsyncFn from 'react-use/lib/useAsyncFn'
import useEffectOnce from 'react-use/lib/useEffectOnce'
import { CategoryNodeType } from '@/store/category/types';

import {CustomTheme } from '@store/theme/ThemeWrapper';

const StyledWrapper = styled.View`
    height: 160px;
    width: 100%;
    padding: 0px 8px;
    margin-top: 20px;
`

const StyledLabel = styled.Text<{theme: CustomTheme}>`
    color: ${props=> props.theme.textColorH1};
    font-size: 20px;
`

const res = {"code":0,"message":null,"data":[{"id":3,"code":null,"name":"Ebook","avatar":"https://img.icons8.com/color/48/000000/unicorn.png","parent_Id":0,"url":"e-book","status":0,"isShow":true,"level":0,"description":"danh sách ebook","count":0,"children":null,"hasChildren":false},{"id":9,"code":null,"name":"Tranh ảnh","avatar":"https://img.icons8.com/color/48/000000/trash-dove.png","parent_Id":0,"url":"tranh_anh","status":0,"isShow":true,"level":0,"description":"tranh ảnh trang trí","count":0,"children":null,"hasChildren":false},{"id":12,"code":null,"name":"Nội thất","avatar":"https://img.icons8.com/color/48/000000/sink.png","parent_Id":0,"url":"noi-that","status":0,"isShow":true,"level":1,"description":"nội thất","count":0,"children":null,"hasChildren":false},{"id":21,"code":null,"name":"Bàn sofa","avatar":"https://img.icons8.com/color/48/000000/toothbrush.png","parent_Id":19,"url":"ban-sofa","status":1,"isShow":true,"level":0,"description":null,"count":0,"children":null,"hasChildren":false},{"id":40,"code":null,"name":"Cầu thang","avatar":"https://img.icons8.com/color/48/000000/bubble.png","parent_Id":39,"url":"cau-thang","status":1,"isShow":true,"level":0,"description":null,"count":0,"children":null,"hasChildren":false},{"id":42,"code":null,"name":"Cửa","avatar":"https://img.icons8.com/color/48/000000/bathrobe.png","parent_Id":39,"url":"cua","status":1,"isShow":true,"level":0,"description":"Cửa","count":0,"children":null,"hasChildren":false},{"id":49,"code":null,"name":"Sơn","avatar":"https://img.icons8.com/color/48/000000/toothpaste.png","parent_Id":47,"url":"son","status":1,"isShow":true,"level":0,"description":"Sơn","count":0,"children":null,"hasChildren":false}]}


const renderItem = ({ item }) => <Category category={item}/>



const getItemLayout= (data, index) => (
    {length: CATEGORY_ITEM_WIDTH, offset: CATEGORY_ITEM_WIDTH * index, index}
);


const ProductCategories = React.memo(()=>{

    const [status, fetch ] = useAsyncFn(async()=>{
        return false
    },[])

    useEffectOnce(()=>{
        fetch();
    })

    return(
        <StyledWrapper>
        
        <StyledLabel>
            {'Danh muc'}
        </StyledLabel>
        <FlatList 
            horizontal={true}
            refreshing={status.loading}
            data={res.data}
            renderItem={renderItem}
            getItemLayout = {getItemLayout}
            //@ts-ignore
            keyExtractor={ item => item.id}
        />
        </StyledWrapper>

    )
})

export default ProductCategories;