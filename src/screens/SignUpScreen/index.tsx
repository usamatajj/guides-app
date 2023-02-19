import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import TextField from '@components/TextField/index'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'

const SignUpScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { colors, fonts } = useTheme()
  const [cnic, setCnic] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <View
      style={{
        backgroundColor: colors.background,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View
        style={{
          ...styles.cardStyles,
          backgroundColor: colors.background,
          top: styles.cardStyles.top - 100,
        }}
      >
        <Text
          style={{
            fontFamily: fonts.bodyLarge.fontFamily,
            color: colors.onBackground,
            ...styles.cardHeaderStyles,
          }}
        >
          SHARES E-REGISTRY
        </Text>
      </View>

      <View
        style={{ ...styles.cardStyles, backgroundColor: colors.onBackground }}
      >
        <Text
          style={{
            fontFamily: fonts.bodyLarge.fontFamily,
            color: colors.background,
            ...styles.cardHeaderStyles,
          }}
        >
          SIGN UP
        </Text>
        <TextField
          mode="outlined"
          label="CNIC"
          style={{ ...styles.textFieldStyles, borderColor: colors.background }}
          value={cnic}
          onChange={setCnic}
        />
        <TextField
          mode="outlined"
          label="Phone Number"
          style={{ ...styles.textFieldStyles, borderColor: colors.background }}
          value={phone}
          onChange={setPhone}
        />
        <Button
          mode="contained"
          icon="account-plus"
          onPress={() => navigation.navigate('OTP')}
        >
          Register
        </Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardStyles: {
    flexDirection: 'column',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    ...StyleSheet.absoluteFillObject,
    top: 250,
  },
  cardHeaderStyles: {
    fontSize: 27,
    alignSelf: 'center',
    margin: 15,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFieldStyles: {
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  containedButtonStyles: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  labelStyles: {},
})

export default SignUpScreen
