import { useMutation } from '@tanstack/react-query'
import apiCall from 'utils/apis/apiCall'
import {
  LoginPayloadType,
  LoginResponseType,
  VerificationPayloadType,
  VerificationResponseType,
} from 'utils/types'

// Auth APIs
export const useLoginUser = () => {
  return useMutation<LoginResponseType, Error, Partial<LoginPayloadType>>(
    (data: Partial<LoginPayloadType>) =>
      apiCall('user/login', {
        data,
        method: 'POST',
      }),
  )
}

export const useVerifyUser = () => {
  return useMutation<
    VerificationResponseType,
    Error,
    Partial<VerificationPayloadType>
  >((data: Partial<VerificationPayloadType>) =>
    apiCall('user/verify-verification-code', {
      data,
      method: 'POST',
    }),
  )
}
