import {combineReducers} from 'redux'
import themeReducer from '@store/theme/reducer';

const appReducer = combineReducers({
    theme: themeReducer
})



export default appReducer;