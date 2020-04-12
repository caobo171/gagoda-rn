import React, { memo } from 'react';
import styled from 'styled-components/native';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';

const STextInput = styled.TextInput`
`

const InputField = memo(()=>{
    return (
        <TextField
            label='Phone number'
            keyboardType='phone-pad'
        />
    )
})

export default InputField;