import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { loginSchema } from './validations'
import { Controller, useForm } from 'react-hook-form'
import { useLoginUser } from 'utils/apis/auth'
import { saveUserData } from 'utils/dataStorage'
import { RootStackParamList } from 'utils/types'
import { useNetInfo } from '@react-native-community/netinfo'

const illustrationImage = require('@assets/images/illustration.png')

type LoginFormType = {
  phoneNumber: string
}

const LoginScreen = () => {
  const { colors } = useTheme()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const styles = makeStyles(colors)
  const netInfo = useNetInfo()

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormType>({
    resolver: yupResolver(loginSchema),
  })
  const { phoneNumber } = watch()
  const { isLoading, isSuccess, mutate } = useLoginUser()
  useEffect(() => {
    if (isSuccess) {
      saveUserData({ phoneNumber: phoneNumber.replace(/^./, '+92') })
      navigateToOTPScreen()
    }
  }, [isSuccess])

  useEffect(() => {
    if (netInfo.isConnected === false) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'NoInternet' }],
      })
    }
  }, [netInfo.isConnected])

  const onSubmit = (data: LoginFormType) => {
    mutate({ mobile: data.phoneNumber.replace(/^./, '+92'), userName: '' })
    console.log(data)
  }

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
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                {/* @ts-ignore */}
                <TextInput
                  mode="outlined"
                  label="Phone Number"
                  keyboardType="number-pad"
                  placeholder="Please enter your phone number"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  style={styles.textFieldStyles}
                  error={!!errors.phoneNumber}
                />
                <Text style={styles.inputInfoStyles}>
                  {errors?.phoneNumber?.message}
                </Text>
              </>
            )}
          />
          <Button
            mode="outlined"
            icon="arrow-right"
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  )
}
const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
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
    dangerStyle: {
      borderColor: colors.error,
    },
    imageStyles: { width: 300, height: 300 },
    inputInfoStyles: { color: colors.error },
  })

export default LoginScreen
