import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'
import { RootStackParamList } from './src/utils/types'

// Project Imports
import LoginScreen from './src/screens/LoginScreen'
import OTPScreen from './src/screens/OTPScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import SelectBoardScreen from './src/screens/SelectBoardScreen'
import SelectClassScreen from './src/screens/SelectClassScreen'
import SelectBookScreen from './src/screens/SelectBookScreen'
import PreviewScreen from './src/screens/PreviewScreen'
import NoInternetScreen from './src/screens/NoInternetScreen'

// Theme
import theme from './src/ui/theme'
import { enableScreens } from 'react-native-screens'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
enableScreens()

export const Stack = createNativeStackNavigator<RootStackParamList>()

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor={theme.colors.background}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
              statusBarHidden: false,
              statusBarTranslucent: true,
            }}
          >
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="PreviewBook" component={PreviewScreen} />
            <Stack.Screen name="SelectBook" component={SelectBookScreen} />
            <Stack.Screen name="SelectBoard" component={SelectBoardScreen} />
            <Stack.Screen name="SelectClass" component={SelectClassScreen} />
            <Stack.Screen name="NoInternet" component={NoInternetScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App
