import { createAction} from 'typesafe-actions';
import { CategoryNodeType } from './types';

export const getCategoryWithTree = createAction('product/getcategorynode', 
(categories: CategoryNodeType[]) => categories)<CategoryNodeType[]>();