import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '@screens/Home' ;

import Search from '@screens/Search';
import { Platform } from 'react-native';
import {getBottomSpace } from 'react-native-iphone-x-helper';


const Tab = createMaterialTopTabNavigator();

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
            activeTintColor: 'orange',
            inactiveTintColor: '#595959',
            renderIndicator: () => null
        }}
        lazy ={ true}
        
        >
            <Tab.Screen name={'Home'} component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'home'} color={color} size={24} />
                }}
            />
            <Tab.Screen name={'Search'} component={Search}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'search1'} color={color} size={24} />
                }}
            />
        </Tab.Navigator>
    )
})


export default BottomNavigator;