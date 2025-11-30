'use client'

import { useState } from 'react'

const WEB3FORMS_KEY = 'b4583fd3-9c0f-4055-9958-459889bef193'

interface FormData {
  [key: string]: string
}

interface UseContactFormReturn {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
  submitForm: (data: FormData) => Promise<boolean>
  reset: () => void
}

export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const reset = () => {
    setIsSuccess(false)
    setIsError(false)
    setErrorMessage('')
  }

  const submitForm = async (data: FormData): Promise<boolean> => {
    setIsSubmitting(true)
    setIsError(false)
    setIsSuccess(false)
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'Al-Haramain Travels Website',
          ...data
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        return true
      } else {
        setIsError(true)
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
        return false
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage('Network error. Please check your connection and try again.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    isSuccess,
    isError,
    errorMessage,
    submitForm,
    reset
  }
}

