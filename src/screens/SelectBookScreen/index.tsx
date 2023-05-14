import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'
import { Appbar, Button, Checkbox, Surface, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { BookItem } from 'utils/types'

import BookListItem from '@components/BookListItem'

const DATA: BookItem[] = [
  {
    id: '1',
    title: 'Physics',
    name: 'Physics',
    price: '654',
    description:
      'join within park gray create pond oil fifteen fall owner got right clearly shall charge instrument compass political not double voyage shoe usually because',
  },
  {
    id: '2',
    title: 'Biology',
    name: 'Biology',
    price: '701',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '3',
    title: 'Mathematics',
    name: 'Mathematics',
    price: '543',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '4',
    title: 'Chemistry',
    name: 'Chemistry',
    price: '460',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
  },
  {
    id: '5',
    title: 'Biology',
    name: 'Biology',
    price: '849',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
]

const SelectBookScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>
}) => {
  const { Action, Content } = Appbar
  const { colors, fonts } = useTheme()
  const [selectedBooks, setSelectedBooks] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const renderItem = ({ item }: { item: BookItem }) => {
    return (
      <BookListItem
        item={item}
        onPress={() => {
          setSelectedBooks(books =>
            books.includes(item.id)
              ? [...books.filter(book => book !== item.id)]
              : [...books, item.id],
          )
        }}
        selected={selectAll}
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
        <Action
          icon="arrow-left"
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Content title="Select Books" subtitle={'Select Book'} />
      </Appbar.Header>
      <Surface elevation={1} style={styles.surfaceStyles}>
        <Checkbox
          status={selectAll ? 'checked' : 'unchecked'}
          onPress={() => {
            setSelectAll(!selectAll)
          }}
        />
        <View style={styles.selectAllInfoStyles}>
          <Text style={styles.selectAllTitleStyle}>Select All</Text>
          <Text style={styles.selectAllDescriptionStyle} numberOfLines={2}>
            By selecting all, you’ll get 30% off on net amount.
          </Text>
        </View>
      </Surface>
      <View style={styles.cardStyles}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
        <Button
          mode="contained"
          style={styles.purchaseButtonStyles}
          onPress={() => {
            console.log('Purchase Done')
          }}
          disabled={!selectedBooks.length}
        >
          Purchase Now
        </Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardStyles: {
    ...StyleSheet.absoluteFillObject,
    top: Dimensions.get('window').height - 510,
    flexDirection: 'column',
    alignItems: 'center',
  },
  purchaseButtonStyles: {
    width: Dimensions.get('screen').width - 20,
    fontSize: 20,
    padding: 2,
    marginBottom: 10,
  },
  surfaceStyles: {
    width: Dimensions.get('screen').width - 30,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    gap: 5,
  },
  selectAllInfoStyles: {
    borderColor: '#000',
    display: 'flex',
    flexDirection: 'column',
  },
  selectAllTitleStyle: {
    fontWeight: '700',
    fontSize: 18,
  },
  selectAllDescriptionStyle: {
    width: Dimensions.get('screen').width - 70,
    fontSize: 16,
  },
})

export default SelectBookScreen
