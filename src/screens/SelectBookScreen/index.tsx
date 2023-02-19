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
import { ClassItem } from 'utils/types'

import BookListItem from 'components/BookListItem'

const DATA: ClassItem[] = [
  {
    id: '1',
    title: 'Physics',
    name: 'Physics',
    description:
      'join within park gray create pond oil fifteen fall owner got right clearly shall charge instrument compass political not double voyage shoe usually because',
  },
  {
    id: '2',
    title: 'Biology',
    name: 'Biology',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '3',
    title: 'Mathematics',
    name: 'Mathematics',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '4',
    title: 'Chemistry',
    name: 'Chemistry',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
  },
  {
    id: '5',
    title: 'Biology',
    name: 'Biology',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '6',
    title: 'Mathematics',
    name: 'Mathematics',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '7',
    title: 'Chemistry',
    name: 'Chemistry',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
  },

  {
    id: '8',
    title: 'Biology',
    name: 'Biology',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '9',
    title: 'Mathematics',
    name: 'Mathematics',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '10',
    title: 'Chemistry',
    name: 'Chemistry',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
  },

  {
    id: '11',
    title: 'Biology',
    name: 'Biology',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '12',
    title: 'Mathematics',
    name: 'Mathematics',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '13',
    title: 'Chemistry',
    name: 'Chemistry',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
  },
  {
    id: '14',
    title: 'Biology',
    name: 'Biology',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '15',
    title: 'Mathematics',
    name: 'Mathematics',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '16',
    title: 'Chemistry',
    name: 'Chemistry',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
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
  const renderItem = ({ item }: { item: ClassItem }) => {
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
    top: Dimensions.get('window').height - 610,
    flexDirection: 'column',
    alignItems: 'center',
  },
  purchaseButtonStyles: {
    width: Dimensions.get('screen').width - 20,
    fontSize: 20,
    padding: 2,
    marginBottom: 10,
  },
})

export default SelectBookScreen
