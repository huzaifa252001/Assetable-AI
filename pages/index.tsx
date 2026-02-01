import React from 'react'
import Link from 'next/link'
import { FiShield, FiTrendingUp, FiCheckCircle, FiArrowRight, FiLogIn } from 'react-icons/fi'

const Home = () => {
  const features = [
    {
      icon: <FiShield />,
      title: 'Secure',
      description: 'Bank-verified custody with audited APIs and regulatory compliance',
    },
    {
      icon: <FiTrendingUp />,
      title: 'AI-Driven',
      description: 'Intelligent automation for collateral valuation and loan pricing',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Transparent',
      description: 'On-chain cap tables and audit logs for complete transparency',
    },
    {
      icon: <FiShield />,
      title: 'Compliant',
      description: 'Dual compliance rails for Shariah-compliant and conventional lending',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Assetable AI
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-primary-100">
              Gold, Silver and other commodities
            </p>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              AI-Powered Asset Tokenization Platform
            </p>
            <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
              Transforming real assets into digital opportunities with AI-powered tokenization. 
              Enable banks to offer loans against tokenized, audited, and custodied assets on-chain 
              while preserving regulatory and Shariah compliance.
            </p>
            <div className="flex justify-center">
              <Link
                href="/login"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                <FiLogIn className="mr-2" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Assetable AI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with security, intelligence, and compliance at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
              <p className="text-lg text-gray-700 mb-4">
                Real assets like gold and silver remain underutilized as collateral across 
                retail and corporate banking ecosystems.
              </p>
              <p className="text-lg text-gray-700">
                By tokenizing real assets such as gold and silver into stablecoins that can be 
                traded or sold directly in the market, banks can unlock collateral liquidity and 
                avoid costly recovery and liquidation processes in case of default.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-lg text-white">
              <h2 className="text-4xl font-bold mb-6">The Opportunity</h2>
              <p className="text-xl">
                Enable multiple banks to offer loans against tokenized, audited, and custodied 
                assets on-chain while preserving regulatory and Shariah compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Asset-Backed Lending?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join us in revolutionizing how banks handle secured loans with AI-powered tokenization
          </p>
          <Link
            href="/contact"
            className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center"
          >
            Contact Us <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home