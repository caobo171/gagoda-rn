import React, { memo } from 'react'

import styled from 'styled-components/native';
import InputField from './InputField';



const SWrapper = styled.ScrollView`

`

const SText = styled.Text`

`

const LoginView = memo(()=>{
    return (
        <SWrapper>
            <SText>LOGIN</SText>
            <InputField/>
        </SWrapper>
    )
})


export default LoginView;