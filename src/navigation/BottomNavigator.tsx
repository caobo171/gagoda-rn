import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '@screens/Home' ;

import Search from '@screens/Search';
import { Platform } from 'react-native';
import {getBottomSpace } from 'react-native-iphone-x-helper';


const Tab = createMaterialTopTabNavigator();

interface Props{
    color:string
}
const renderTabarHomeIcon = ({ color }) => <Icon name={'home'} color={color} size={24} />
const renderTabarSearchIcon  = ({ color }) => <Icon name={'search1'} color={color} size={24} />

const BottomNavigator = React.memo(()=> {
    return (
        <Tab.Navigator

        initialRouteName={'Home'}
        tabBarPosition={'bottom'}
        removeClippedSubviews={Platform.OS !== 'ios'}
        tabBarOptions={{
            tabStyle: {
                paddingBottom: getBottomSpace(),
                paddingTop: getBottomSpace()? 16: 0
            },
            showIcon: true,
            showLabel: false,
            activeTintColor: '#525252',
            inactiveTintColor: '#a1a1a1',
            renderIndicator: () => null
        }}
        lazy ={ true}
        
        >
            <Tab.Screen name={'Home'} component={Home}
                options={{
                    tabBarIcon: renderTabarHomeIcon
                }}
            />
            <Tab.Screen name={'Search'} component={Search}
                options={{
                    tabBarIcon: renderTabarSearchIcon
                }}
            />
        </Tab.Navigator>
    )
})


export default BottomNavigator;