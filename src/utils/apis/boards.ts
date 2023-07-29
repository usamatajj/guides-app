import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import apiCall from 'utils/apis/apiCall'
import { BoardResponseType } from 'utils/types'

// Book APIs
export const useGetBoards = () => {
  return useQuery<BoardResponseType, Error>(['getBoards'], () =>
    apiCall('board'),
  )
}
