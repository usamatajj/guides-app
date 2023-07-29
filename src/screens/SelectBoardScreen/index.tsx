import React, { useEffect } from 'react'
import { BoardItem, RootStackParamList } from 'utils/types'
import BoardListItem from '@components/BoardListItem'
import { Appbar, useTheme } from 'react-native-paper'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { View, StyleSheet, Dimensions, FlatList } from 'react-native'
import { withCheckInternet } from 'hoc/withCheckInternet'
import { useNetInfo } from '@react-native-community/netinfo'
const { Action, Header, Content } = Appbar

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

const SelectBoardScreen = () => {
  const { colors } = useTheme()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const netInfo = useNetInfo()
  const styles = makeStyles(colors)
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
        <Content title="Select Board" subtitle={'Select Screen'} />
      </Header>
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
const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      ...StyleSheet.absoluteFillObject,
    },
    cardStyles: {
      ...StyleSheet.absoluteFillObject,
      top: Dimensions.get('window').height - 595,
      flexDirection: 'column',
      alignItems: 'center',
    },
  })

export default SelectBoardScreen
