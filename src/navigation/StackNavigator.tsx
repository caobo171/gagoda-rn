import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '@/screens/ProductDetail';
import BottomNavigator from './BottomNavigator';
import Login from '@/screens/Login';


const Stack = createStackNavigator();

const StackNavigator = React.memo(()=>{
    return(
        <Stack.Navigator
            initialRouteName={'Master'}
            
        >   
            <Stack.Screen name={'Login'} component = {Login}/>
            <Stack.Screen name={'ProductDetail'} component={ProductDetail}/>
            <Stack.Screen name={'Master'} component = {BottomNavigator} />
        </Stack.Navigator>
    )
})


export default StackNavigator;