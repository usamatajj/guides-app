import * as Keychain from 'react-native-keychain'
import { UserDataType } from './types'

const saveUserData = async (data: Partial<UserDataType>): Promise<void> => {
  const useData: UserDataType = {
    name: '',
    apiToken: '',
    phoneNumber: '',
    ...data,
  }
  await Keychain.setGenericPassword('userData', JSON.stringify(useData))
}

const retrieveUserData = async (): Promise<UserDataType | null> => {
  try {
    const credentials = await Keychain.getGenericPassword()
    if (credentials) {
      const userData: UserDataType = JSON.parse(credentials.password)
      return userData
    }
  } catch (error) {
    console.error('Error retrieving user data:', error)
    throw error
  }
  return null
}

export { saveUserData, retrieveUserData }
