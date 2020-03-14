import React, { memo } from 'react'

import styled from 'styled-components/native';

const StyledWrapper = styled.View`
    height: 100px;
    width: 100%;
`

const StyledText  = styled.Text`
`

const Home = memo(()=>{
    return (<StyledWrapper>
        <StyledText>Home</StyledText>
    </StyledWrapper>)
})

export default Home;