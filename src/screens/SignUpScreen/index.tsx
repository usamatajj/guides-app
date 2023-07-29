import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import TextField from '@components/TextField/index'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import {
  MD3Colors,
  MD3Typescale,
} from 'react-native-paper/lib/typescript/types'
import { RootStackParamList } from 'utils/types'

const SignUpScreen = () => {
  const { colors, fonts } = useTheme()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [cnic, setCnic] = useState('')
  const [phone, setPhone] = useState('')
  const styles = makeStyles(colors, fonts)
  return (
    <View style={styles.background}>
      <View style={styles.cardStyles}>
        <Text style={styles.cardHeaderStyles}>SHARES E-REGISTRY</Text>
      </View>

      <View
        style={{ ...styles.cardStyles, backgroundColor: colors.onBackground }}
      >
        <Text style={styles.cardHeaderStyles}>SIGN UP</Text>
        <TextField
          mode="outlined"
          label="CNIC"
          style={styles.textFieldStyles}
          value={cnic}
          onChange={setCnic}
        />
        <TextField
          mode="outlined"
          label="Phone Number"
          style={styles.textFieldStyles}
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
const makeStyles = (colors: MD3Colors, fonts: MD3Typescale) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      ...StyleSheet.absoluteFillObject,
    },
    cardStyles: {
      flexDirection: 'column',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      ...StyleSheet.absoluteFillObject,
      top: 150,
      backgroundColor: colors.background,
    },
    cardHeaderStyles: {
      fontSize: 27,
      alignSelf: 'center',
      margin: 15,
      fontFamily: fonts.bodyLarge.fontFamily,
      color: colors.background,
    },
    rowStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textFieldStyles: {
      marginHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10,
      borderColor: colors.background,
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
