import React, { ComponentType, useEffect } from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'utils/types'

export const withCheckInternet = (Component: ComponentType<any>) => {
  return (props: any) => {
    const netInfo = useNetInfo()
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    useEffect(() => {
      if (netInfo.isConnected === false) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'NoInternet' }],
        })
      }
    }, [netInfo.isConnected])
    return <Component {...props} />
  }
}
