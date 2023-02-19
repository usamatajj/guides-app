import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from 'react-native-gesture-handler'

const illustrationImage = require('@assets/images/illustration.png')

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { colors, fonts } = useTheme()
  const navigateToOTPScreen = () => {
    console.log('OTP NAVIGATED')
    navigation.navigate('OTP')
  }

  return (
    <View
      style={{
        backgroundColor: colors.background,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={styles.cardStyles}>
        <Image source={illustrationImage} style={styles.imageStyles} />
        <View style={styles.controlStyles}>
          <TextInput
            mode="outlined"
            label="Phone Number"
            keyboardType="number-pad"
            placeholder="Please enter your phone number"
            style={styles.textFieldStyles}
          />
          <Button
            mode="outlined"
            icon="arrow-right"
            onPress={navigateToOTPScreen}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardStyles: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  controlStyles: {
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textFieldStyles: {
    width: Dimensions.get('window').width - 30,
  },
  imageStyles: { width: 300, height: 300 },
})

export default LoginScreen
