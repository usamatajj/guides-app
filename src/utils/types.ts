export type BoardItem = {
  id: string
  title: string
  icon: any
}

export type ClassItem = {
  id: string
  name: string
  title: string
  description: string
}

export type BookItem = {
  id: string
  name: string
  title: string
  description: string
  price: string
  selected?: boolean
}

export type RootStackParamList = {
  Login: undefined
  OTP: undefined
  Dashboard: undefined
  SelectBoard: undefined
  SelectClass: undefined
  SelectBook: undefined
  PreviewBook: undefined
  NoInternet: undefined
}

// API RESPONSE TYPES
export type UserResponseType = any
export type BoardResponseType = any
export type ClassResponseType = any
export type BookResponseType = any
export type LoginResponseType = any
export type VerificationResponseType = {
  status: number
  message: 'approved' | 'pending' | 'disapproved'
  token: string
}

// API PAYLOAD TYPES
export type BoardPayloadType = any
export type ClassPayloadType = any
export type BookPayloadType = any
export type LoginPayloadType = { mobile: string; userName: string }
export type VerificationPayloadType = {
  mobile: string
  code: string
}

// USER DATA TYPE
export type UserDataType = {
  phoneNumber: string
  name: string
  apiToken: string
}
