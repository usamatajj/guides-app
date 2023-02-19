import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
const otpImage = require('@assets/images/otp_image.png')
import { NavigationProp } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const OTPScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { colors, fonts } = useTheme()
  return (
    <View
      style={{
        backgroundColor: colors.background,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Appbar.Header>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            console.log('go back')
            navigation.goBack()
          }}
        />
        <Appbar.Content title="Verification" subtitle={'Subtitle'} />
      </Appbar.Header>
      <View style={styles.cardStyles}>
        <Image source={otpImage} style={styles.imageStyles} />
        <Text style={styles.infoStyles}>
          We've sent an OTP code to{' '}
          <Text style={styles.phoneNumberStyles}>"0333-1234567"</Text>. Please
          enter the code below and continue
        </Text>
        <OTPInputView
          style={{ width: '80%', height: 100 }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={{
            ...styles.otpFieldStyle,
            color: colors.onBackground,
          }}
          codeInputHighlightStyle={{ borderColor: colors.primary }}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`)
          }}
        />
        <Button
          mode="outlined"
          icon="arrow-right"
          style={styles.verifyButtonStyles}
          onPress={() => {
            navigation.navigate('Dashboard')
          }}
        >
          Verify
        </Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardStyles: {
    ...StyleSheet.absoluteFillObject,
    top: Dimensions.get('window').height - 600,
    rowGap: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  verifyButtonStyles: {
    width: '85%',
  },
  imageStyles: {
    width: 90,
    height: 110,
  },
  phoneNumberStyles: {
    fontWeight: '800',
  },
  infoStyles: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 30,
    lineHeight: 26,
  },
  otpFieldStyle: {
    width: 70,
    height: 65,
    fontSize: 28,
    borderRadius: 8,
    borderWidth: 1.5,
  },
})

export default OTPScreen
