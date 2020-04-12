import {createReducer, ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { State } from './types';


const initialState: State={
    categories: []
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.getCategoryWithTree,(state,action)=>(
    {
        ...state,
        categories:action.payload
    }
))