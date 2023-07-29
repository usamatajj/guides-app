import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'utils/types'
import { Platform } from 'react-native'

export const useCheckInternet: () => null = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  useEffect(() => {
    if (Platform.OS === 'android') {
      const unsubscribe = NetInfo.addEventListener(state => {
        console.log(
          '🚀 ~ file: useCheckInternet.ts:12 ~ unsubscribe ~ state:',
          state,
        )
        if (!state.isConnected) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'NoInternet' }],
          })
        } else if (state.isConnected) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        }
      })

      return () => {
        unsubscribe()
      }
    }
  }, [])

  return null
}
