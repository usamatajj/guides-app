import * as yup from 'yup'

export const verificationSchema = yup.object().shape({
  otp: yup
    .string()
    .required('OTP is required')
    .min(4, 'Enter complete OTP')
    .max(4, 'Enter complete OTP'),
})
