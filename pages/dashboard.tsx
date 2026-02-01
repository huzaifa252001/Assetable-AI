import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import { FiTrendingUp, FiDollarSign, FiActivity, FiArrowRight, FiWallet, FiShield } from 'react-icons/fi'

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
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

  // Mock data - in production, this would come from an API
  const stats = [
    {
      label: 'Total Assets',
      value: '2.5 oz',
      change: '+12.5%',
      iconName: 'wallet' as const,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Tokenized Value',
      value: '$5,250',
      change: '+8.3%',
      iconName: 'dollar' as const,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Active Loans',
      value: '2',
      change: 'Stable',
      iconName: 'activity' as const,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Portfolio Growth',
      value: '15.2%',
      change: '+2.1%',
      iconName: 'trending' as const,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
  ]

  const getIcon = (iconName: 'wallet' | 'dollar' | 'activity' | 'trending') => {
    switch (iconName) {
      case 'wallet':
        return <FiWallet />
      case 'dollar':
        return <FiDollarSign />
      case 'activity':
        return <FiActivity />
      case 'trending':
        return <FiTrendingUp />
      default:
        return null
    }
  }

  const recentActivity = [
    { id: 1, type: 'Deposit', asset: 'Gold', amount: '1.0 oz', date: '2024-01-15', status: 'Completed' },
    { id: 2, type: 'Tokenized', asset: 'Gold', amount: '1.0 oz', date: '2024-01-15', status: 'Completed' },
    { id: 3, type: 'Loan Issued', asset: 'Against Gold', amount: '$2,500', date: '2024-01-14', status: 'Active' },
    { id: 4, type: 'Deposit', asset: 'Silver', amount: '10.0 oz', date: '2024-01-10', status: 'Completed' },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back{user && user.name ? `, ${user.name}` : ''}!
              </h1>
              <p className="text-xl text-gray-300">
                Manage your tokenized assets and loans
              </p>
            </div>
            <Link
              href="/trading"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Go to Trading <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
                    {getIcon(stat.iconName)}
                  </div>
                  <span className="text-sm text-gray-600">{stat.change}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/trading"
              className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <FiActivity className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trade Assets</h3>
              <p className="text-primary-100">Buy, sell, or trade tokenized assets</p>
            </Link>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <FiDollarSign className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Request Loan</h3>
              <p className="text-green-100">Get a loan against your tokenized assets</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <FiWallet className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deposit Assets</h3>
              <p className="text-purple-100">Tokenize your physical gold or silver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Recent Activity</h2>
              <Link
                href="/activity"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Asset
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {activity.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.asset}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Security Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary-700 to-secondary-600 text-white p-8 rounded-lg">
            <div className="flex items-start">
              <FiShield className="text-4xl mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Your Assets Are Secure</h3>
                <p className="text-gray-200 mb-4">
                  All your tokenized assets are backed 1:1 by physical reserves held in 
                  regulated custody with bank-verified vaults. Our platform maintains 
                  on-chain cap tables and audit logs for complete transparency.
                </p>
                <Link
                  href="/features"
                  className="text-primary-300 hover:text-primary-200 font-medium inline-flex items-center"
                >
                  Learn more about security <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard