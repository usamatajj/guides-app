import React, { ReactNode } from 'react'
import { TextInput } from 'react-native-paper'
import { StyleProp, TextStyle } from 'react-native/types'

interface Props {
  mode?: 'flat' | 'outlined'
  label?: string
  type?: 'password'
  right_icon?: ReactNode
  left_icon?: ReactNode
  style?: StyleProp<TextStyle>
  value?: string
  onChange?: any
}

const TextField = ({
  mode,
  label,
  type,
  right_icon,
  left_icon,
  style,
  value,
  onChange,
}: Props) => {
  return (
    <TextInput
      mode={mode}
      label={label}
      secureTextEntry={type === 'password'}
      right={right_icon}
      left={left_icon}
      style={style}
      value={value}
      onChangeText={onChange}
    />
  )
}

export default TextField
