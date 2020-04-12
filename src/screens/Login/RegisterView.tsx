import React, { memo } from 'react'

import styled from 'styled-components/native';



const SWrapper = styled.ScrollView`

`

const SText = styled.Text`

`

const RegisterView = memo(()=>{
    return (
        <SWrapper>
            <SText>REGISTER</SText>
        </SWrapper>
    )
})


export default RegisterView;