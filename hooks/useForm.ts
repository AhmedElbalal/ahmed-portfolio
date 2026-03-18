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
      // Option A: EmailJS (install @emailjs/browser and configure)
      // import emailjs from '@emailjs/browser'
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')

      // Option B: Next.js API Route (create app/api/contact/route.ts)
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!res.ok) throw new Error('Failed to send')

      // Placeholder — replace with Option A or B above
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
