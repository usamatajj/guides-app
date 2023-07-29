import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
const otpImage = require('@assets/images/otp_image.png')
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { retrieveUserData, saveUserData } from 'utils/dataStorage'
import { RootStackParamList, UserDataType } from 'utils/types'
import { useLoginUser, useVerifyUser } from 'utils/apis/auth'
import { Controller, FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { verificationSchema } from './validations'
import { withCheckInternet } from 'hoc/withCheckInternet'
import { useNetInfo } from '@react-native-community/netinfo'
const { Action, Header, Content } = Appbar

type VerificationFormType = {
  otp: string
}

const OTPScreen = () => {
  const { colors } = useTheme()
  const netInfo = useNetInfo()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const [showResend, setShowResend] = useState(false)
  const { isLoading, data, mutate } = useVerifyUser()

  const {
    isLoading: isLoginLoading,
    isSuccess: isLoginSuccess,
    mutate: isLoginMutate,
  } = useLoginUser()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationFormType>({
    resolver: yupResolver(verificationSchema),
  })
  const styles = makeStyles(colors, errors)

  const getUserData = async () => {
    const data = await retrieveUserData()
    if (data?.phoneNumber) {
      setUserData(data)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    if (netInfo.isConnected === false) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'NoInternet' }],
      })
    }
  }, [netInfo.isConnected])

  const onSubmit = (data: VerificationFormType) => {
    mutate({ code: data.otp, mobile: userData?.phoneNumber })
  }

  const loginUser = () => {
    isLoginMutate({ mobile: userData?.phoneNumber, userName: '' })
  }

  useEffect(() => {
    if (data?.message === 'approved') {
      const token = typeof data?.token === 'string' ? data.token : ''
      saveUserData({ apiToken: token })
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    } else if (data?.message === 'disapproved') {
      setShowResend(true)
    }
  }, [data])
  useEffect(() => {
    if (isLoginSuccess) {
      setShowResend(false)
    }
  }, [isLoginSuccess])

  return (
    <View style={styles.background}>
      <Header>
        {/* @ts-ignore */}
        <Action
          icon="arrow-left"
          onPress={() => {
            console.log('go back')
            navigation.goBack()
          }}
        />
        {/* @ts-ignore */}
        <Content title="Verification" subtitle={'Subtitle'} />
      </Header>
      <View style={styles.cardStyles}>
        <Image source={otpImage} style={styles.imageStyles} />
        <Text style={styles.infoStyles}>
          We've sent an OTP code to{' '}
          <Text style={styles.phoneNumberStyles}>{userData?.phoneNumber}</Text>.
          Please enter the code below and continue
        </Text>
        <Controller
          name="otp"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <OTPInputView
                style={styles.otpInputViewStyles}
                pinCount={4}
                onCodeChanged={code => {
                  onChange(code)
                }}
                code={value}
                codeInputFieldStyle={styles.otpFieldStyle}
                codeInputHighlightStyle={styles.codeInputHighlightStyle}
                autoFocusOnLoad
              />
              <Text style={styles.inputInfoStyles}>
                {errors?.otp?.message ||
                  (showResend && 'Invalid OTP code Please resend!')}
              </Text>
            </>
          )}
        />
        {showResend && (
          <View>
            <Button
              icon="refresh"
              mode="text"
              loading={isLoginLoading}
              onPress={loginUser}
            >
              Resend
            </Button>
          </View>
        )}
        <Button
          mode="outlined"
          icon="arrow-right"
          style={styles.verifyButtonStyles}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        >
          Verify
        </Button>
      </View>
    </View>
  )
}
const makeStyles = (
  colors: MD3Colors,
  errors: FieldErrors<VerificationFormType>,
) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      ...StyleSheet.absoluteFillObject,
    },
    cardStyles: {
      ...StyleSheet.absoluteFillObject,
      top: Dimensions.get('window').height - 600,
      rowGap: 30,
      flexDirection: 'column',
      alignItems: 'center',
    },
    otpInputViewStyles: {
      width: '90%',
      height: 100,
    },
    codeInputHighlightStyle: { borderColor: colors.primary },
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
      color: colors.primary,
    },
    otpFieldStyle: {
      width: 70,
      height: 65,
      fontSize: 28,
      borderRadius: 8,
      borderWidth: 1.5,
      borderColor: !!errors?.otp ? colors.error : colors.onBackground,
      color: colors.onBackground,
    },
    inputInfoStyles: { color: colors.error, textAlign: 'center' },
  })

export default OTPScreen
