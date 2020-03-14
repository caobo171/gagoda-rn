import { ThemeMode } from './ThemeWrapper'
import store from '../store'
import * as actions from './actions'
import { Store } from 'redux'


export const updateTheme = (theme: ThemeMode, storex:Store = store)=>{
    return storex.dispatch(actions.updateTheme(theme))
}