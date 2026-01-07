import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { apiFetch } from '../lib/api'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await apiFetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
        reset()
      } else {
        const errorData = await response.json()
        setSubmitStatus({ type: 'error', message: errorData.message || 'Failed to send message' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error sending message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Get In Touch</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Your message here..."
            {...register('message')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {submitStatus && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-700 border border-green-400'
                : 'bg-red-100 text-red-700 border border-red-400'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Or reach out directly:</p>
        <p className="text-lg font-semibold text-slate-900">your.email@example.com</p>
      </div>
    </div>
  )
}
