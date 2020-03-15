import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { ImagePickerResponse, WindowDimension } from './types'
import styled from 'styled-components/native'

interface Props {
    image: ImagePickerResponse,
    onSelect: (image: ImagePickerResponse) => void;
    selected: boolean,
    order: null | number,
    buttonColor?: string,
    textColor? : string
}

const StyleNumberIndicator = styled.View<{buttonColor: string}>`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${props=> props.buttonColor};
  align-items: center;
  justify-content: center;
  opacity: 1;
 
`
const StyledView = styled(TouchableOpacity)`
  width: 100%;
  position: relative;
`
const StyledImage = styled(FastImage)`
  width: ${WindowDimension.WIDTH / 3}px;
  height: ${WindowDimension.WIDTH / 3}px;
`
const StyledOverlay = styled(View)`
  position: absolute;
  left: 0 ;
  top: 0 ;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.4);
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text<{textColor: string}>`
  color: ${props=> props.textColor};
`

const ImageItem = React.memo((props: Props) => {

    const selectHandle = useCallback(()=>{
      props.onSelect(props.image)
    },[props.image,props.onSelect])

    return (
        <StyledView onPress={selectHandle}>
            <StyledImage source={{ uri: props.image.uri }} />
            {
                props.selected && <StyledOverlay>
                    <StyleNumberIndicator buttonColor={ props.buttonColor? props.buttonColor : '#1f96ff'}>

                        <StyledText textColor = {props.textColor ? props.textColor : "#ffffff"}>
                          {props.order}</StyledText>
                    </StyleNumberIndicator>
                </StyledOverlay>
            }
        </StyledView>

    )
})

export default ImageItem