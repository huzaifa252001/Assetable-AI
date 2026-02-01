import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import { FiTrendingUp, FiTrendingDown, FiArrowUp, FiArrowDown, FiSearch, FiFilter } from 'react-icons/fi'

const Trading = () => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState<'buy' | 'sell' | 'trade'>('buy')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait a bit for auth context to initialize
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (!isAuthenticated) {
        router.push('/login')
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isAuthenticated, router])

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Mock trading data
  const assets = [
    {
      id: 1,
      name: 'Gold Token (GOLD)',
      symbol: 'GOLD',
      price: '$2,100.50',
      change: '+2.5%',
      changeValue: '+$52.30',
      trend: 'up' as const,
      volume: '1.2M',
      yourHoldings: '2.5 oz',
      value: '$5,251.25',
    },
    {
      id: 2,
      name: 'Silver Token (SILV)',
      symbol: 'SILV',
      price: '$24.75',
      change: '-1.2%',
      changeValue: '-$0.30',
      trend: 'down' as const,
      volume: '850K',
      yourHoldings: '10.0 oz',
      value: '$247.50',
    },
    {
      id: 3,
      name: 'Platinum Token (PLAT)',
      symbol: 'PLAT',
      price: '$980.00',
      change: '+0.8%',
      changeValue: '+$7.84',
      trend: 'up' as const,
      volume: '320K',
      yourHoldings: '0 oz',
      value: '$0.00',
    },
  ]

  const recentTrades = [
    { id: 1, type: 'Buy', asset: 'GOLD', amount: '0.5 oz', price: '$2,095.00', time: '10:30 AM' },
    { id: 2, type: 'Sell', asset: 'SILV', amount: '2.0 oz', price: '$24.80', time: '09:15 AM' },
    { id: 3, type: 'Buy', asset: 'GOLD', amount: '1.0 oz', price: '$2,090.00', time: 'Yesterday' },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Trading Platform</h1>
              <p className="text-xl text-primary-100">
                Buy, sell, and trade tokenized assets backed by real commodities
              </p>
            </div>
            <Link
              href="/dashboard"
              className="bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setSelectedTab('buy')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                selectedTab === 'buy'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setSelectedTab('sell')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                selectedTab === 'sell'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Sell
            </button>
            <button
              onClick={() => setSelectedTab('trade')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                selectedTab === 'trade'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Trade
            </button>
          </div>
        </div>
      </section>

      {/* Main Trading Interface */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Assets List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Available Assets</h2>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search assets..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <FiFilter />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {assets.map((asset) => (
                    <div
                      key={asset.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{asset.name}</h3>
                          <p className="text-sm text-gray-500">{asset.symbol}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-gray-900">{asset.price}</p>
                          <div className={`flex items-center ${asset.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {asset.trend === 'up' ? (
                              <FiTrendingUp className="mr-1" />
                            ) : (
                              <FiTrendingDown className="mr-1" />
                            )}
                            <span className="text-sm font-medium">{asset.change}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Your Holdings</p>
                          <p className="text-sm font-semibold text-gray-900">{asset.yourHoldings}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Value</p>
                          <p className="text-sm font-semibold text-gray-900">{asset.value}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">24h Volume</p>
                          <p className="text-sm font-semibold text-gray-900">{asset.volume}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                          Buy
                        </button>
                        <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                          Sell
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trading Panel */}
            <div className="space-y-6">
              {/* Order Form */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedTab === 'buy' && 'Buy Assets'}
                  {selectedTab === 'sell' && 'Sell Assets'}
                  {selectedTab === 'trade' && 'Trade Assets'}
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Asset
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Gold Token (GOLD)</option>
                      <option>Silver Token (SILV)</option>
                      <option>Platinum Token (PLAT)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedTab === 'buy' ? 'Amount to Buy' : 'Amount to Sell'}
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Balance: 2.5 oz GOLD</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price per oz
                    </label>
                    <input
                      type="text"
                      value="$2,100.50"
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="text-lg font-bold text-gray-900">$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fee (0.5%)</span>
                      <span className="text-gray-900">$0.00</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    {selectedTab === 'buy' && 'Buy Now'}
                    {selectedTab === 'sell' && 'Sell Now'}
                    {selectedTab === 'trade' && 'Place Trade'}
                  </button>
                </div>
              </div>

              {/* Recent Trades */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Trades</h3>
                <div className="space-y-3">
                  {recentTrades.map((trade) => (
                    <div
                      key={trade.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <div className="flex items-center">
                          <span
                            className={`font-semibold mr-2 ${
                              trade.type === 'Buy' ? 'text-green-600' : 'text-red-600'
                            }`}
                          >
                            {trade.type}
                          </span>
                          <span className="text-sm text-gray-700">{trade.asset}</span>
                        </div>
                        <p className="text-xs text-gray-500">{trade.amount} @ {trade.price}</p>
                      </div>
                      <span className="text-xs text-gray-500">{trade.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Total Market Cap</span>
                <FiArrowUp className="text-xl" />
              </div>
              <p className="text-3xl font-bold">$125.5M</p>
              <p className="text-sm opacity-90 mt-1">+5.2% from last week</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">24h Volume</span>
                <FiTrendingUp className="text-xl" />
              </div>
              <p className="text-3xl font-bold">$2.37M</p>
              <p className="text-sm opacity-90 mt-1">+12.8% from yesterday</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Active Users</span>
                <FiArrowUp className="text-xl" />
              </div>
              <p className="text-3xl font-bold">1,247</p>
              <p className="text-sm opacity-90 mt-1">+23 new today</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trading