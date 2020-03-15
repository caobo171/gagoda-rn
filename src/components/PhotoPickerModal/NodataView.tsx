import React from 'react'

import styled from 'styled-components/native';
const StyledWrapper = styled.View`
    margin-left:auto;
    margin-right:auto;
    margin-top:auto;
    margin-bottom:auto;
`
const StyledText = styled.Text`

`
const NodataView = React.memo(()=>{
    return <StyledWrapper>
        <StyledText>There is no image</StyledText>
        </StyledWrapper>
})

export default NodataView;