import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Dimensions, GestureResponderEvent } from 'react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Checkbox, useTheme } from 'react-native-paper'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { BookItem, RootStackParamList } from 'utils/types'

type Props = {
  item: BookItem
  selected: boolean
  onPress: () => void
}

const BookListItem = ({ item, onPress, selected = false }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { colors } = useTheme()
  const [checked, setChecked] = useState<boolean>(false)
  const styles = makeStyles(colors)
  const onCheck = (e: GestureResponderEvent) => {
    e.stopPropagation()
    onPress()
    setChecked(!checked)
  }

  const previewBook = (e: GestureResponderEvent) => {
    e.stopPropagation()
    navigation.navigate('PreviewBook')
  }
  useEffect(() => {
    setChecked(selected)
  }, [selected])
  return (
    <TouchableOpacity onPress={onCheck}>
      <View style={styles.itemStyle}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={onCheck}
        />
        <View style={styles.bookInfoStyles}>
          <View style={styles.bookDescriptionStyles}>
            <Text style={styles.subjectNameStyles}>{item.name}</Text>
            <Text style={styles.priceStyles}>{`Rs. ${item.price}`}</Text>
          </View>
          <Button mode="text" onPress={previewBook}>
            <Text style={styles.previewButtonStyles}>Preview</Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    itemStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: Dimensions.get('screen').width - 60,
      marginBottom: 10,
    },

    bookInfoStyles: {
      width: Dimensions.get('screen').width - 110,
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 20,
    },
    subjectNameStyles: {
      fontWeight: '600',
      fontSize: 20,
      textAlignVertical: 'center',
      color: colors.primary,
    },
    priceStyles: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: '700',
    },
    previewButtonStyles: {
      textDecorationLine: 'underline',
    },
    bookDescriptionStyles: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      rowGap: 2,
    },
  })

export default BookListItem
