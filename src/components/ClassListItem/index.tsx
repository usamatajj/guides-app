import React from 'react'
import { Dimensions } from 'react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { ClassItem } from 'utils/types'

type Props = {
  item: ClassItem
  onPress: () => void
}

const ClassListItem = ({ item, onPress }: Props) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemStyle}>
        <Text
          style={{ ...styles.titleStyles, backgroundColor: colors.primary }}
        >
          {item.title}
        </Text>
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
    alignItems: 'center',
    width: Dimensions.get('screen').width - 35,
    height: 100,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'rgba(168, 166, 166,0.4)',
    borderRadius: 15,
    textAlign: 'left',
  },
  titleStyles: {
    height: '100%',
    width: '25%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
  },
  nameStyles: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    textAlignVertical: 'center',
    marginHorizontal: 20,
  },
})

export default ClassListItem
