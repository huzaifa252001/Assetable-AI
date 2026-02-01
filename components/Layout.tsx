import React from 'react'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const isLoginPage = router.pathname === '/login'

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoginPage && <Navigation />}
      <main className="flex-grow">
        {children}
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default Layout