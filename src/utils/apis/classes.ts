import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import apiCall from 'utils/apis/apiCall'
import { ClassResponseType } from 'utils/types'

// Classes APIs
export const useGetClasses = () => {
  return useQuery<ClassResponseType[], Error>(['getClasses'], () =>
    apiCall('class'),
  )
}
