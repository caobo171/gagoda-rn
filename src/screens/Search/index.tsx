import React, { memo } from 'react'

import styled from 'styled-components/native';

const StyledWrapper = styled.View`
    height: 100px;
    width: 100%;
`

const StyledText  = styled.Text`
`

const Search = memo(()=>{
    return (<StyledWrapper>
        <StyledText>Search</StyledText>
    </StyledWrapper>)
})

export default Search;