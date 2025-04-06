'use client'

import { useState } from "react"

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', password: ''
  })

  const [errors, setErrors] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validatePassword = (password) => {
    const errorMessages = [];
    if (password.length < 8) errorMessages.push('At least 8 characters');
    if (!/[A-Z]/.test(password)) errorMessages.push('One uppercase letter');
    if (!/[a-z]/.test(password)) errorMessages.push('One Lowercase letter');
    if (!/[0-9]/.test(password)) errorMessages.push('One number');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errorMessages.push('One special character');
    return errorMessages;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    setSubmitted(false)

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email'

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else {
      const passwordIssues = validatePassword(formData.password)
      if (passwordIssues.length > 0) {
        newErrors.password = `Password must include: ${passwordIssues.join(', ')}`
      }
    }

    if (formData.phone && isNaN(formData.phone)) {
      newErrors.phone = 'Phone must be numberic'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-r from-blue-100 to-green-100" >
      <div className="w-100  bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl text-lime-700  mb-6 text-center">User Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="text" name="name" placeholder='Name' className="mt-1 block w-full border rounded p-2" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input type="email" name="email" placeholder='Email' className="mt-1 block w-full border rounded p-2" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input type="text" name="phone" placeholder='Phone (optional)' className="mt-1 block w-full border rounded p-2" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <input type="password" name="password" placeholder='Password' className="mt-1 block w-full border rounded p-2" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-lime-700 text-white py-2 rounded hover:bg-lime-800" >
            SUBMIT
          </button>
        </form>

        <div className='my-3'>
          {submitted &&
            (
              <div className="flex items-center justify-center my-3 bg-green-100 text-green-800 p-4 rounded mb-4 text-center">
                <div className='mr-2'><i className="fa-regular fa-circle-user mr-2"></i> Profile successfully created!</div>
                <button onClick={() => {
                  setFormData({ name: '', email: '', phone: '', password: '' })
                  setErrors({})
                  setSubmitted(false)
                }}
                  className="mt-2 px-2 py-1 bg-lime-700 text-white rounded-lg hover:bg-lime-800"
                >
                  OK
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
