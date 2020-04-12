import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import Constants from '@/Constants';

const routes = [
    { key: 'first', title: 'Login' },
    { key: 'second', title: 'Register' },
  ]

const initialLayout = { width: Constants.WINDOW_WIDTH };
const renderScene = SceneMap({
    first: LoginView,
    second: RegisterView,
  });
const Login = React.memo(()=>{
    const [index, setIndex] = React.useState(0);

    return (
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        initialLayout={initialLayout}
        onIndexChange={setIndex}

        />
    )
})



export default Login;


