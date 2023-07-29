import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'
import { Appbar, Button, Surface, useTheme } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ClassItem, RootStackParamList } from 'utils/types'
import Pdf from 'react-native-pdf'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { withCheckInternet } from 'hoc/withCheckInternet'
import { useNetInfo } from '@react-native-community/netinfo'
const { Action, Header, Content } = Appbar

const screen = Dimensions.get('screen')

const PreviewScreen = () => {
  const source = require('../../../assets/files/sample.pdf')
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const netInfo = useNetInfo()
  const { colors } = useTheme()
  const styles = makeStyles(colors)

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
          icon="arrow-left"
          onPress={() => {
            console.log('go back')
            navigation.goBack()
          }}
        />
        {/* @ts-ignore */}
        <Content title="Preview Book" subtitle={'Preview Book'} />
      </Header>
      <Surface style={styles.previewContainerStyles}>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`)
          }}
          onError={error => {
            console.log(error)
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`)
          }}
          style={styles.pdf}
        />
      </Surface>
      <Button
        mode="contained"
        style={styles.purchaseButtonStyles}
        onPress={() => {
          console.log('Select Book')
          navigation.navigate('SelectBook')
        }}
      >
        Purchase Now
      </Button>
    </View>
  )
}

const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      ...StyleSheet.absoluteFillObject,
    },
    previewContainerStyles: {
      height: screen.height - 220,
      alignItems: 'center',
      width: screen.width - 20,
      marginHorizontal: 10,
      marginBottom: 30,
    },
    bookPreviewStyles: { fontSize: 58, fontWeight: '800', textAlign: 'center' },
    purchaseButtonStyles: {
      width: screen.width - 20,
      marginHorizontal: 10,
      fontSize: 20,
      padding: 2,
    },
    pdf: {
      flex: 1,
      width: screen.width - 60,
      height: screen.height,
    },
  })

export default PreviewScreen
