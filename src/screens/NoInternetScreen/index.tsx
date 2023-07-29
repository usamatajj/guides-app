import { View, StyleSheet, Image, Dimensions, Text } from 'react-native'
import { useTheme } from 'react-native-paper'
import React, { useEffect } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { useNetInfo } from '@react-native-community/netinfo'
import { saveUserData } from 'utils/dataStorage'
import { withCheckInternet } from 'hoc/withCheckInternet'

const noInternetImage = require('@assets/images/no_internet.png')

const NoInternetScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>
}) => {
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const netInfo = useNetInfo()

  useEffect(() => {
    saveUserData({ phoneNumber: '', apiToken: '', name: '' })
  }, [])

  useEffect(() => {
    if (netInfo.isConnected === true) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    }
  }, [netInfo.isConnected])

  return (
    <View
      style={{
        backgroundColor: colors.background,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={styles.cardStyles}>
        <Image source={noInternetImage} style={styles.imageStyles} />
        <View style={styles.controlStyles}>
          <Text>No Internet Connection</Text>
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
  })

export default NoInternetScreen
