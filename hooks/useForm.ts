'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

export function useForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitForm = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      })

      if (!response.ok) throw new Error('Failed to send')
      setSuccess(true)
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setError(null)
    setSuccess(false)
  }

  return { isLoading, error, success, submitForm, resetForm }
}