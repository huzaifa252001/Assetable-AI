import React from 'react'
import Link from 'next/link'
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-secondary-700 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Assetable AI</h3>
            <p className="text-gray-300">
              Transforming real assets into digital opportunities with AI-powered tokenization
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solution" className="text-gray-300 hover:text-white transition-colors">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-300 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FiMail className="mr-2" />
                <a href="mailto:farhajrizvi115@gmail.com" className="hover:text-white transition-colors">
                  farhajrizvi115@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                <a href="tel:+923313213053" className="hover:text-white transition-colors">
                  +92 331 3213053
                </a>
              </li>
              <li className="flex items-center">
                <FiLinkedin className="mr-2" />
                <a 
                  href="https://www.linkedin.com/in/syed-farhaj-mehdi-rizvi-668a69260/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Assetable AI. All rights reserved.</p>
          <p className="mt-2 text-sm">Idea by: Syed Farhaj Mehdi Rizvi</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer