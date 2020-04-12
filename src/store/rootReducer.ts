import {combineReducers} from 'redux'
import themeReducer from '@store/theme/reducer';
import productReducer from '@store/product/reducers';
import categoryReducer from '@store/category/reducer';

const appReducer = combineReducers({
    theme: themeReducer,
    product: productReducer,
    categoryTree: categoryReducer
})



export default appReducer;