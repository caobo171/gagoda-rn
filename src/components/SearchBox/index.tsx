import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Touchable from '@/components/UI/Touchable';
import {CustomTheme} from '@/store/theme/ThemeWrapper';


const StyledWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    height: 48px;
    padding: 8px  12px;
    margin-bottom: 8px;
`

const StyledSearchBox = styled.View<{theme: CustomTheme}>`
    flex-direction:row;
    align-items: center;
    background-color: ${props=> props.theme.inputUnderPrimaryBackgroundColor};
    flex:1;
    height: 100%;
    border-radius: 12px
    padding: 8px 12px;
`

const StyledSearchIcon = styled(Icon)`
    font-size: 16px;
`

const StyledTextInput = styled.TextInput`
    flex: 1;
    margin-left: 8px;
`

const StyledCameraIcon = styled(Icon)`
    font-size: 28px;
    margin-left: 12px;
    opacity: 0.6;
`

const SearchBox = React.memo(()=>{

    return (
        <StyledWrapper>
            <StyledSearchBox>
                <StyledSearchIcon name={'search1'} />
            <StyledTextInput />
            </StyledSearchBox>
        
            <Touchable onPress={()=>console.log('aa')}>
                <StyledCameraIcon name={'camerao'} />
            </Touchable>


            <Touchable onPress={()=>console.log('aa')}>
                <StyledCameraIcon name={'shoppingcart'} />
            </Touchable>
  
        </StyledWrapper>
    )
})


export default SearchBox;