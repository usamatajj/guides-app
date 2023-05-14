import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'
import { Appbar, Button, Surface, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ClassItem, RootStackParamList } from 'utils/types'
import Pdf from 'react-native-pdf'

type Props = {}

const screen = Dimensions.get('screen')

const PreviewScreen = () => {
  const source = require('../../../assets/files/sample.pdf')
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { colors } = useTheme()
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
        <Appbar.Content title="Select Class" subtitle={'Select Screen'} />
      </Appbar.Header>
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
          console.log('Purchase Done')
        }}
      >
        Purchase Now
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
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
