import store from "../store";
import Fetch from "@/service/Fetch";
import { CategoryNodeType } from "./types";
import * as actions from './actions'

export const getCategoryWithTree = async(storex= store)=>{
    const res = await Fetch.get<{data:CategoryNodeType[]}>('/product/GetListCategoryWithTree')
    storex.dispatch(actions.getCategoryWithTree(res.data.data));
    console.log(res.data)
    return res.data.data;
}