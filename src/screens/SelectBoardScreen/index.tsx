import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'
import { Appbar, Button, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { BoardItem } from 'utils/types'
import BoardListItem from 'components/BoardListItem'
// Images
const board_1 = require('@assets/images/board_1.png')
const board_2 = require('@assets/images/board_2.png')
const board_3 = require('@assets/images/board_3.png')
const board_4 = require('@assets/images/board_4.png')

const DATA: BoardItem[] = [
  { id: '1', title: 'Peshawar Board', icon: board_1 },
  { id: '2', title: 'Sindh Board', icon: board_2 },
  { id: '3', title: 'Rawalpindi Board', icon: board_3 },
  { id: '4', title: 'Federal Board', icon: board_4 },
]

const SelectBoardScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>
}) => {
  const { colors, fonts } = useTheme()

  const renderItem = ({ item }: { item: BoardItem }) => {
    console.log('ITEM RENDERED')
    return (
      <BoardListItem
        item={item}
        onPress={() => {
          navigation.navigate('SelectClass')
        }}
      />
    )
  }
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
        <Appbar.Content title="Select Board" subtitle={'Select Screen'} />
      </Appbar.Header>
      <View style={styles.cardStyles}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardStyles: {
    ...StyleSheet.absoluteFillObject,
    top: Dimensions.get('window').height - 610,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default SelectBoardScreen
