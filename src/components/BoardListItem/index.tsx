import React from 'react'
import { Dimensions } from 'react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BoardItem } from 'utils/types'

type Props = {
  item: BoardItem
  onPress: () => void
}

const BoardListItem = ({ item, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.itemStyle}>
      <Text style={styles.titleStyles}>{item.title}</Text>
      <Image style={styles.imageStyles} source={item.icon} />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  itemStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    width: Dimensions.get('screen').width - 35,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'rgba(168, 166, 166,0.4)',
    borderRadius: 15,
    textAlign: 'left',
  },
  titleStyles: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
  },
  imageStyles: {},
})

export default BoardListItem
