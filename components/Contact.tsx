'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useForm } from '@/hooks/useForm'
import { Button } from './ui/Button'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const { isLoading, error, success, submitForm, resetForm } = useForm()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) resetForm()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm(formData)
    if (success) {
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {[
              { icon: Phone, label: 'Phone', value: '+1 (438) 796-5224' },
              { icon: Mail, label: 'Email', value: 'ahmedelbalal@ahmedelbalal.dev' },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Montreal, Canada',
                sub: 'Open to remote opportunities',
              },
              {
                icon: Clock,
                label: 'Response Time',
                value: 'Within 24 hours',
                sub: 'Usually faster',
              },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="contact-item">
                <div className="contact-icon">
                  <Icon size={24} />
                </div>
                <div className="contact-details">
                  <h3>{label}</h3>
                  <p>{value}</p>
                  {sub && <small>{sub}</small>}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              >
                <option value="">Select a subject</option>
                <option value="hire">Project Collaboration</option>
                <option value="consulting">Consulting Inquiry</option>
                <option value="interview">Interview Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                rows={5}
              />
            </div>

            {(error || success) && (
              <div className={`form-status ${success ? 'success' : 'error'}`}>
                {success ? 'Message sent successfully!' : error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              icon={isLoading ? undefined : Send}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
