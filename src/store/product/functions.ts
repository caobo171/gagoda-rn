import store from '@store/store';
import Fetch from '@/service/Fetch';
import { ProductType } from './types';
import * as actions from './actions';

const NEWEST_PRODUCTS_AMOUNT = 10
const SALE_PRODUCTS_AMOUNT = 10 
const BEST_SELL_AMOUNT = 10

export const getNewestProducts = async(storex=store)=>{
    const res = await Fetch.get<{data: ProductType[]}>(`/product/Gettopnew?top=${NEWEST_PRODUCTS_AMOUNT}`);
    storex.dispatch(actions.getNewestProducts(res.data.data));
    return res.data.data
}


export const getSaleProducts = async(storex=store)=>{
    const res = await Fetch.get<{data: ProductType[]}>(`/product/gettopsale?top=${SALE_PRODUCTS_AMOUNT}`);
    storex.dispatch(actions.getSaleProducts(res.data.data));
    return res.data.data
}

export const getBestsellerProducts = async(storex=store)=>{
    const res = await Fetch.get<{data: ProductType[]}>(`/product/gettopsell?top=${BEST_SELL_AMOUNT}`);
    storex.dispatch(actions.getBestSellerProducts(res.data.data));
    return res.data.data
}