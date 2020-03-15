import React, { PureComponent, useRef, useEffect } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera'
import { requestCameraPermission } from '@/services/permission';
import styled from 'styled-components/native';

const SCamera = styled(RNCamera)`
    height: 100%;
    width: 100%;
`

const Search = () => {

    const cameraRef = useRef()

    useEffect(()=>{
        requestCameraPermission()
    },[])
    return (
        <View>

            <SCamera ref = {cameraRef}/>


        </View>
    )
}


export default Search 