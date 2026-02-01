import React from 'react'
import { FiUser, FiHome, FiCheckCircle, FiTrendingUp, FiLock, FiDollarSign, FiUsers, FiActivity } from 'react-icons/fi'

const UseCases = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Use Cases</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            The AI-Powered Asset Tokenization Platform enables diverse user segments to leverage
            real assets for secured lending and portfolio diversification.
          </p>
        </div>
      </section>

      {/* Retail Users Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FiUser className="text-6xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Retail Users</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              All segments can access instant liquidity through tokenized assets
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-12 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">User Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Deposit Physical Assets</h4>
                      <p className="text-gray-700">Deposit physical gold into partner bank vault</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Token Issuance</h4>
                      <p className="text-gray-700">Platform issues corresponding gold-backed stablecoins linked to custody metadata</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Collateral Listing</h4>
                      <p className="text-gray-700">Stablecoin listed as collateral for AI-priced loans</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Multiple Bank Offers</h4>
                      <p className="text-gray-700">Multiple bank offers with dynamic pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4 flex-shrink-0 font-semibold">5</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">Redemption</h4>
                      <p className="text-gray-700">Redeem Stablecoin to redeem physical gold</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold mb-6 text-gray-900">Value Proposition</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiCheckCircle className="text-2xl text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Simple Onboarding</h5>
                      <p className="text-gray-700">Easy process to deposit and tokenize assets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCheckCircle className="text-2xl text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Instant Liquidity</h5>
                      <p className="text-gray-700">Access funds immediately through tokenized assets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCheckCircle className="text-2xl text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">AI-Powered Pricing</h5>
                      <p className="text-gray-700">Get competitive loan offers powered by AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FiHome className="text-6xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Bank Partners</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Expand lending capabilities with tokenized collateral infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiTrendingUp className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Portfolio Expansion</h3>
              <p className="text-gray-700 mb-4">
                Expand secured loan book without operational friction
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Access to tokenized collateral pool</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Reduce operational overhead</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiDollarSign className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI-Powered Pricing</h3>
              <p className="text-gray-700 mb-4">
                Leverage AI for real-time collateral pricing
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Dynamic LTV calculations</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Risk-adjusted pricing models</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiLock className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Dual Product Rails</h3>
              <p className="text-gray-700 mb-4">
                Offer both Shariah-compliant and conventional products
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Islamic financing solutions</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Traditional banking products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiActivity className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Unified Tools</h3>
              <p className="text-gray-700 mb-4">
                Access unified underwriting and servicing tools
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Standardized workflows</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Multi-bank syndicated loans</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-700 to-secondary-600 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-semibold mb-6 text-center">Key Benefits for Banks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Portfolio Expansion</h4>
                <p className="text-gray-300">Grow secured loan portfolios efficiently</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Risk Diversification</h4>
                <p className="text-gray-300">Diversify risk with tokenized assets</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Enhanced Compliance</h4>
                <p className="text-gray-300">Built-in regulatory and Shariah compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pakistan Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Pakistan Market Opportunity</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pakistan presents a significant market opportunity due to its strategic shift towards
              Shariah-compliant banking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategic Shariah Conversion</h3>
              <p className="text-gray-700 mb-4">
                Creating strong demand for financial solutions that are inherently Shariah-compatible,
                auditable, and asset-backed. Our platform serves as foundational infrastructure for
                banks in Pakistan.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Dual-Rail Advantage</h3>
              <p className="text-gray-700 mb-4">
                Parallel product rails offering both Shariah-compliant and conventional loan structure,
                maximizing market reach and facilitating compliance with evolving regulatory landscapes.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Local Vault Partnerships</h3>
              <p className="text-gray-700 mb-4">
                Partnership with Bank owned local vaults within the region, ensuring convenient
                redemption and custody in users' native jurisdictions.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Market Impact</h3>
              <p className="text-gray-700 mb-4">
                Positioning the platform as the primary infrastructure for bank modernization,
                enabling institutions to innovate and diversify their product offerings in a rapidly
                changing global financial environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UseCases