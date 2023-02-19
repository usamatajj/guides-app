import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Appbar, Button, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'

const DashboardScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>
}) => {
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
          icon="menu"
          onPress={() => {
            console.log('go back')
            navigation.goBack()
          }}
        />
        <Appbar.Content title="Dashboard" subtitle={'Dashboard'} />
      </Appbar.Header>
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
const styles = StyleSheet.create({
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
  },
  infoHeading: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 26,
    fontWeight: '800',
  },
  infoDescription: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 26,
  },
})

export default DashboardScreen
