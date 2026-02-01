import React from 'react'
import { FiCheck, FiLock, FiUsers, FiDollarSign, FiShield, FiActivity } from 'react-icons/fi'

const Solution = () => {
  const solutionFeatures = [
    {
      icon: <FiDollarSign />,
      title: '1:1 Asset Backing',
      description: 'Stablecoins backed 1:1 by physical assets (gold, silver, rare metals, real estate) securely stored in bank-verified or platform-owned vaults',
    },
    {
      icon: <FiUsers />,
      title: 'Multi-Bank RM Onboarding',
      description: 'Partner banks can onboard their relationship managers onto the platform to issue AI-assisted loan offers against tokenized collateral',
    },
    {
      icon: <FiActivity />,
      title: 'Stablecoin Lifecycle Management',
      description: 'Comprehensive management of Stablecoin lifecycle including minting, freezing, unfreezing, force transfers, and burning with on-chain cap tables',
    },
    {
      icon: <FiShield />,
      title: 'Dual Compliance Rails',
      description: 'Shariah-compliant product rails alongside conventional lending rails, offering Islamic financing solutions and traditional banking products',
    },
  ]

  const benefits = [
    'Increasing secured loan portfolios',
    'Diversifying loan portfolios',
    'Enhancing efficiency',
    'Improving liquidity in asset-backed lending',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            An AI-powered platform that issues fully gold-pegged stablecoins representing physical 
            reserves held in regulated custody that can be traded or collateralized, enabling 
            multiple banks to offer loans against tokenized collateral with regulatory and Shariah compliance.
          </p>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Key Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Expand Loan Portfolios</h3>
              <p className="text-gray-700">
                Enable banks to offer more secured loans with tokenized collateral
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Built-in compliance for both Shariah and conventional banking requirements
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Faster Settlement</h3>
              <p className="text-gray-700">
                Instant settlement through blockchain technology
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary-500 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Additional Benefits:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <FiCheck className="mr-3 text-xl" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stablecoin Lifecycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Stablecoin Lifecycle & Custody</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The platform orchestrates a comprehensive Stablecoin lifecycle, ensuring secure 
              management of tokenized assets from deposit to redemption.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-700 to-secondary-600 text-white p-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Custody & Compliance</h3>
                <p className="text-lg mb-4">
                  Secure custody through bank vaults and custodians via audited APIs. Platform 
                  maintains on-chain cap tables and audit logs for regulatory trace.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <FiLock className="mr-3 mt-1 text-primary-400" />
                    <span>Bank-verified vault storage</span>
                  </div>
                  <div className="flex items-start">
                    <FiShield className="mr-3 mt-1 text-primary-400" />
                    <span>Audited custody APIs</span>
                  </div>
                  <div className="flex items-start">
                    <FiActivity className="mr-3 mt-1 text-primary-400" />
                    <span>On-chain audit trails</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Lifecycle Stages</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">1</span>
                    Asset Deposit
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">2</span>
                    Tokenization & Minting
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">3</span>
                    Collateral Listing
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">4</span>
                    Loan Issuance
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">5</span>
                    Redemption
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solution