import React , {useState} from 'react'
import { Button } from 'react-native'
import PhotoPickerModal from '@components/PhotoPickerModal'

import styled from 'styled-components/native'


const StyledWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

const StyledView = styled.View`
  height: 400px;
  width: 100%;
  justify-content: flex-end;
`
const Home = () => {

  const [modalVisible , setModalVisible ] = useState(false)
  return (
    <StyledWrapper>


      <StyledView>
        <Button title = {"Pick Image Modal"} onPress = {()=> {
          setModalVisible(!modalVisible)
        }}></Button>

      </StyledView>

      <PhotoPickerModal
        buttonColor= "yellow"
        textColor = "green"

        isVisible = {modalVisible}
        onCancelHandle = {()=> {

          console.log('aaaaaa')
          console.log(modalVisible)
          setModalVisible(false)
        }}
        endingPickImageHandle = {(results)=>{
          console.log('check')
        }}
      
      />
    </StyledWrapper>



  )
}

export default Home