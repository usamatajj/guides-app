import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import apiCall from 'utils/apis/apiCall'
import { BookResponseType } from 'utils/types'

// Book APIs
export const useGetBooks = () => {
  return useQuery<BookResponseType, Error>(['getBooks'], () => apiCall('book'))
}

export const useGetBookByBoard = (boardId?: string) => {
  return useQuery<BookResponseType, Error>(
    ['getBookByBoard', boardId],
    () => apiCall(`book/by-board?board_id=${boardId}`),
    {
      enabled: !!boardId,
      // staleTime: Infinity,
    },
  )
}

export const useGetBookByClass = (classId?: string) => {
  return useQuery<BookResponseType, Error>(
    ['getBookByClass', classId],
    () => apiCall(`book/by-class?class_id=${classId}`),
    {
      enabled: !!classId,
      // staleTime: Infinity,
    },
  )
}

export const useGetBookByClassAndBoard = (
  classId?: string,
  boardId?: string,
) => {
  return useQuery<BookResponseType, Error>(
    ['getBookByClassAndBoard', classId, boardId],
    () =>
      apiCall(
        `book/by-class-and-board?class_id=${classId}&board_id=${boardId}`,
      ),
    {
      enabled: !!classId || !!classId,
      // staleTime: Infinity,
    },
  )
}
