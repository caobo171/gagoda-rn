import React, { useState, useRef, useEffect } from 'react';
import Swiper from 'react-native-swiper'
import CarouselItem from './CarouselItem';
import styled from 'styled-components/native';
import Constants from '@/Constants';


const IMAGES = [
    {
        id: 1,
        url: 'http://35.187.251.1/_nuxt/img/9aaf14b.jpg'
    },
    {
        id: 2,
        url: 'http://35.187.251.1/_nuxt/img/9aaf14b.jpg'
    },
    {
        id: 3,
        url: 'http://35.187.251.1/_nuxt/img/9aaf14b.jpg'
    }
]

const StyledSwiper = styled(Swiper)`
`

const StyledWraper = styled.View`
    height: 200px;
`



const Carousel  = ()=>{

    const carouselRef = useRef<any>(null)

    // useEffect(()=>{
    //     if(carouselRef){
    //         const interval = setInterval(()=>{
    //             carouselRef.current.scrollBy(1,);
    //         }, 3000)

    //         return ()=> clearInterval(interval)
    //     }
    // },[carouselRef] )
    return (
        <StyledWraper >
            <Swiper ref={carouselRef}>
                {
                    IMAGES.map(e=> <CarouselItem url={e.url} key= {e.id} />)
                }
            </Swiper>
        </StyledWraper>

    )
}

export default Carousel ;


