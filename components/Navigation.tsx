import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX, FiLogIn, FiLogOut, FiUser } from 'react-icons/fi'
import { useAuth } from '../contexts/AuthContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  const publicNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Solution', href: '/solution' },
    { name: 'Features', href: '/features' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Contact', href: '/contact' },
  ]

  const authNavItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Trading', href: '/trading' },
  ]

  const navItems = isAuthenticated ? [...publicNavItems, ...authNavItems] : publicNavItems

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Assetable AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated && (
                <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
                  <span className="text-sm text-gray-700 flex items-center">
                    <FiUser className="mr-1" />
                    {user?.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    <FiLogOut className="mr-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && (
              <>
                <div className="px-3 py-2 text-sm text-gray-500 flex items-center border-t border-gray-200 mt-2 pt-2">
                  <FiUser className="mr-2" />
                  {user?.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-primary-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  <FiLogOut className="mr-2 inline" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation