import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  BackHandler,
  ToastAndroid,
} from 'react-native'
import { Appbar, Button, useTheme } from 'react-native-paper'
import React, { useEffect, useRef } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { RootStackParamList } from 'utils/types'
import { useNetInfo } from '@react-native-community/netinfo'
const { Action, Header, Content } = Appbar

const DashboardScreen = () => {
  const { colors } = useTheme()
  const netInfo = useNetInfo()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const styles = makeStyles(colors)
  const backPressCountRef = useRef(0)

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (backPressCountRef.current < 1) {
          backPressCountRef.current += 1
          ToastAndroid.show('Press again to exit', ToastAndroid.SHORT)
          return true // Prevent default back button behavior
        }
        return false // Allow default back button behavior
      },
    )

    return () => {
      backHandler.remove() // Clean up the event listener on component unmount
    }
  }, [])

  useEffect(() => {
    return () => {
      backPressCountRef.current = 0 // Reset back press count on unmount
    }
  }, [])

  useEffect(() => {
    if (netInfo.isConnected === false) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'NoInternet' }],
      })
    }
  }, [netInfo.isConnected])

  return (
    <View style={styles.background}>
      <Header>
        {/* @ts-ignore */}
        <Action
          icon="menu"
          onPress={() => {
            console.log('go back')
            // navigation.goBack()
          }}
        />
        {/* @ts-ignore */}
        <Content title="Dashboard" subtitle={'Dashboard'} />
      </Header>
      <View style={styles.cardStyles}>
        <View style={styles.infoStyles}>
          <Text style={styles.infoHeading}>My Purchase</Text>
          <Text style={styles.infoDescription}>
            You haven't purchased anything yet, Please select the board to
            purchase one
          </Text>
        </View>

        <Button
          mode="outlined"
          icon="arrow-right"
          style={styles.selectBoardButtonStyles}
          onPress={() => {
            navigation.navigate('SelectBoard')
          }}
        >
          Select Your Board
        </Button>
      </View>
    </View>
  )
}
const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      ...StyleSheet.absoluteFillObject,
    },
    cardStyles: {
      ...StyleSheet.absoluteFillObject,
      top: Dimensions.get('window').height - 620,
      rowGap: 30,
      flexDirection: 'column',
      alignItems: 'center',
    },
    selectBoardButtonStyles: {
      width: '85%',
    },
    infoStyles: {
      rowGap: 10,
      marginHorizontal: 10,
      marginTop: 20,
    },
    infoHeading: {
      fontSize: 18,
      textAlign: 'left',
      lineHeight: 26,
      fontWeight: '800',
      color: colors.backdrop,
    },
    infoDescription: {
      fontSize: 18,
      textAlign: 'left',
      lineHeight: 26,
      color: colors.backdrop,
    },
  })

export default DashboardScreen
