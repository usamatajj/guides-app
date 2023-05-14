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
}
