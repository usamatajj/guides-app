import React, { useState } from 'react'
import { Dimensions, GestureResponderEvent } from 'react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { BookItem } from 'utils/types'

type Props = {
  item: BookItem
  onPress: () => void
}

const BookListItem = ({ item, onPress }: Props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const onCheck = (e: GestureResponderEvent) => {
    e.stopPropagation()
    onPress()
    setChecked(!checked)
  }
  return (
    <TouchableOpacity onPress={onCheck}>
      <View style={styles.itemStyle}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={onCheck}
        />
        <Text style={styles.nameStyles}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: Dimensions.get('screen').width - 35,
    marginBottom: 10,
  },

  nameStyles: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    textAlignVertical: 'center',
    marginHorizontal: 20,
  },
})

export default BookListItem
