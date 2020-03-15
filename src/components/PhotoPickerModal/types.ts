import { Dimensions } from "react-native";

export interface ImagePickerResponse{
    groupName: string,
    uri: string,
    height: number,
    width: number,
    fileName: string,
    timestamp: number,
    type?: string,
    

}


export enum WindowDimension {
    WIDTH = Dimensions.get('window').width,
    HEIGHT = Dimensions.get('window').height
}