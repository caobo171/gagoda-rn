import {useSelector } from 'react-redux';
import { RootState } from '../reduxType';


export const useNewestProducts = ()=>{
    return useSelector((state:RootState)=>state.product.newestProducts);
}


export const useSaleProducts = ()=>{
    return useSelector((state:RootState) => state.product.saleProducts);
}

export const useBestsellerProducts = ()=>{
    return useSelector((state:RootState) => state.product.bestsellerProducts);
}