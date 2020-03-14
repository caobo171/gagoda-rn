import rootReducer from './rootReducer'
import { compose , createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares))



const store = createStore(persistedReducer, enhancer)
export const persistedStore = persistStore(store);

export default store; 