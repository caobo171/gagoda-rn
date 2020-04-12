import {Action , createAction} from 'typesafe-actions';
import { ProductType } from './types';

export const getNewestProducts = createAction('product/newest', 
(products: ProductType[]) => products)<ProductType[]>();


export const getSaleProducts = createAction('product/sale', 
(products: ProductType[]) => products)<ProductType[]>();

export const getBestSellerProducts = createAction('product/bestseller', 
(products: ProductType[]) => products)<ProductType[]>();

