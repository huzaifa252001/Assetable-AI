import React from 'react'
import { FiCpu, FiShield, FiDatabase, FiLock, FiFileText, FiCheckCircle, FiCode, FiTrendingUp } from 'react-icons/fi'

const Features = () => {
  const aiFeatures = [
    {
      icon: <FiTrendingUp />,
      title: 'Dynamic LTV Modeling',
      description: 'Continuous revaluation of collateral using real-time price oracles, local market indices, and liquidity signals',
    },
    {
      icon: <FiDatabase />,
      title: 'Credit Underwriting',
      description: 'Multimodal ML models analyzing alternative data, on-chain token behavior, bank signals, and historical performance',
    },
    {
      icon: <FiCpu />,
      title: 'Loan Pricing Engine',
      description: 'Automated pricing and term suggestions optimizing risk-adjusted returns and capital utilization for partner banks',
    },
    {
      icon: <FiShield />,
      title: 'Fraud Detection',
      description: 'Supervised and unsupervised ML models flagging suspicious deposits, duplicate asset claims, and synthetic identities',
    },
    {
      icon: <FiFileText />,
      title: 'Portfolio Monitoring',
      description: 'Comprehensive scenario simulations, automated margin call recommendations, and AI driven recovery playbooks',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Explainability',
      description: 'All AI decisions logged with human-readable rationales for transparency, auditability and regulatory compliance',
    },
  ]

  const complianceFeatures = [
    {
      category: 'Regulatory Compliance',
      items: [
        'Permissioned transfer controls',
        'KYC gating and whitelisting',
        'Proof of reserve validation & Issuer jurisdiction rules',
      ],
    },
    {
      category: 'KYC/KYB Workflows',
      items: [
        'AML screening',
        'Sanctions checks',
        'Beneficial owner verification',
        'Enterprise KYB checks',
      ],
    },
    {
      category: 'Audit Trails',
      items: [
        'Immutable on-chain logs',
        'Off-chain custody attestations',
        'Transparent record for regulators',
      ],
    },
    {
      category: 'Shariah Compliance',
      items: [
        'Islamic financing structures',
        'Murabaha & other Financing Modes',
        'Shariah board review workflows',
        'Dual rails approach',
      ],
    },
    {
      category: 'Infrastructure Security',
      items: [
        'HSM, multisig, MPC controls',
        'Third-party insurance coverage',
        'Regular security audits',
        'SOC2 processes & penetration testing',
      ],
    },
    {
      category: 'Operational Security',
      items: [
        'Disaster recovery plans',
        'Cross-region backups',
        'Vault redundancy',
        'Emergency redemption procedures',
      ],
    },
  ]

  return (
    <div>
      {/* AI Stack Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Stack</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            AI-powered platform enhances efficiency, reduces risk, and ensures compliance through 
            intelligent automation across the asset tokenization and lending lifecycle.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-secondary-700 to-secondary-600 text-white p-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Data Sources</h3>
                <p>Multiple reliable data feeds for accurate analysis</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">AI Processing</h3>
                <p>Advanced ML models for intelligent decision making</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Intelligent Decisions</h3>
                <p>Automated workflows with human oversight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Compliance & Security Controls</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The platform is engineered with robust compliance features to meet stringent regulatory 
              requirements and ensure secure operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-600">{feature.category}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Architecture</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Platform designed for versatile blockchain compatibility and secure asset tokenization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <FiCode className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Blockchain & Standards</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>EVM-compatible chains for public deployment</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Private/permissioned ledgers for bank and regulatory partners</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <FiDatabase className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Stablecoin Standards</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>ERC-20 with compliance extensions (ERC-3643 for KYC/permissioned transfers)</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Proof-of-Reserve (PoR) smart contracts linked to custody attestations</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Supports real-time audit reporting and regulated identity verification</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <FiCpu className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Smart Contracts & Oracles</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Mint & Burn Contracts: automate issuance/redemption</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Treasury Contracts: manage total supply and peg stability</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Real-time Oracles: deliver live gold price feeds and FX rates</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Proof-of-Reserve Oracles: sync vault holdings and audit data</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <FiLock className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Custody & Interoperability</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Secure Custody Integration with regulated bank vaults</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Third-party audit attestations published to blockchain</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Stablecoin & Fiat Bridges for on/off-ramp settlements</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Cross-chain deployment for liquidity across ecosystems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features