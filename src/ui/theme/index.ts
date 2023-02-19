import { MD3LightTheme, configureFonts } from 'react-native-paper'

import { Platform } from 'react-native/types'

const lightGrey = '#F7F9FC'
const white = '#FFFFFF'
const blue = '#2573d5'
const darkBlue = '#29304D'
const red = `#FF0000`
const primary = `#274469`

const fontConfig = {
  customVariant: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
}

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary,
  },
}
export default theme
