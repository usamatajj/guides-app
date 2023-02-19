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

import ClassListItem from 'components/ClassListItem'

const DATA: ClassItem[] = [
  {
    id: '1',
    title: '9th',
    name: '9th Class',
    description:
      'join within park gray create pond oil fifteen fall owner got right clearly shall charge instrument compass political not double voyage shoe usually because',
  },
  {
    id: '2',
    title: '10th',
    name: '10th Class',
    description:
      'load solution watch peace spread fell surrounded shape western principal shaking slightly problem metal ordinary thirty daily cast frequently guide silk brought plain discover',
  },
  {
    id: '3',
    title: '1st Year',
    name: 'First Year',
    description:
      'path bare simple ourselves silver interest great change cotton cabin tribe represent new greatly active former silk page tried traffic rough opportunity step group',
  },
  {
    id: '4',
    title: '2nd Year',
    name: 'Second Year',
    description:
      'tune light fourth drive lack check vast stomach noun fine threw decide child dirty visitor public grow especially few bag army before unknown stopped',
  },
]

const SelectClassScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>
}) => {
  const { colors, fonts } = useTheme()

  const renderItem = ({ item }: { item: ClassItem }) => {
    return (
      <ClassListItem
        item={item}
        onPress={() => {
          navigation.navigate('SelectBook')
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
        <Appbar.Content title="Select Class" subtitle={'Select Screen'} />
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

export default SelectClassScreen
