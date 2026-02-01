import React, { useState } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'farhajrizvi115@gmail.com',
      link: 'mailto:farhajrizvi115@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+92 331 3213053',
      link: 'tel:+923313213053',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'Syed Farhaj Mehdi Rizvi',
      link: 'https://www.linkedin.com/in/syed-farhaj-mehdi-rizvi-668a69260/',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Get in touch with us to learn more about Assetable AI and how we can help transform 
            your asset-backed lending operations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  Send Message <FiSend className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you. Whether you're interested in partnering with us, 
                learning more about our platform, or have questions about asset tokenization, 
                feel free to reach out.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="text-3xl text-primary-600 mr-4 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{info.label}</h3>
                      <p className="text-gray-700">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Idea by</h3>
                <p className="text-xl mb-2">Syed Farhaj Mehdi Rizvi</p>
                <p className="text-primary-100">
                  Transforming real assets into digital opportunities with AI-powered tokenization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Reach Out?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Whether you're a bank looking to expand your lending capabilities or an individual 
              interested in tokenized assets, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl text-primary-600 mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Bank Partnerships</h3>
              <p className="text-gray-700">
                Learn how to integrate our platform and expand your secured loan portfolio
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl text-primary-600 mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Inquiries</h3>
              <p className="text-gray-700">
                Explore opportunities for collaboration and strategic partnerships
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl text-primary-600 mb-4">❓</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">General Questions</h3>
              <p className="text-gray-700">
                Get answers about our platform, technology, and services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact