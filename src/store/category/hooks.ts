import {useSelector } from 'react-redux';
import { RootState } from '../reduxType';

export const useCategoryWithTree = ()=>{
    return useSelector((state:RootState)=> 
    state.categoryTree.categories)
}