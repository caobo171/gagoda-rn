import { StateType } from "typesafe-actions";

export interface ActionType {
    type: string,
    data: any
}


export type RootState  = StateType<typeof import('./rootReducer').default>;