import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native';
import Constants  from '@/Constants';

interface CarouselItemProps{
    url :string
}

const StyledImage = styled.Image`
    height: 100%;
    width: 100%;
`

const CarouselItem = React.memo(({url}: CarouselItemProps)=>{
    return (
        <StyledImage source = {{uri: url}}/>
    )
})

export default CarouselItem;