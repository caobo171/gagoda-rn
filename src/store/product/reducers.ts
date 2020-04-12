import {ActionType, Action , createReducer, StateType} from 'typesafe-actions';
import * as actions from './actions';
import { State } from './types';
import  _ from 'lodash';
// import { fromPairs } from '@/service/helper';

const initialState : State = {
    bestsellerProducts: [],
    saleProducts:[],
    newestProducts:[]
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.getBestSellerProducts,(state, action)=> (
    {
        ...state,
        bestsellerProducts: [
            // ...state.bestsellerProducts,
            ...action.payload
        ]
    }
))
.handleAction(actions.getNewestProducts,(state, action)=> (
    {
        ...state,
        newestProducts: {
            // ...state.newestProducts,
            ...action.payload
        }
    }
))
.handleAction(actions.getSaleProducts,(state, action)=> (
    {
        ...state,
        saleProducts: {
            // ...state.saleProducts,
            ...action.payload
        }
    }
))