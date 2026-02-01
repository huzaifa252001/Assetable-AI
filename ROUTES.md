# Available Routes/Paths

This document lists all available routes in the Assetable AI frontend application.

## Public Routes (No Authentication Required)

### `/` (Home)
- **Description**: Landing page with hero section, features overview, and problem/solution introduction
- **Access**: Public
- **Components**: Hero section, features grid, problem/opportunity section, CTA

### `/solution`
- **Description**: Detailed explanation of the platform's solution and benefits
- **Access**: Public
- **Components**: Solution features, benefits, stablecoin lifecycle information

### `/features`
- **Description**: AI Stack, Compliance & Security Controls, and Technical Architecture
- **Access**: Public
- **Components**: AI features grid, compliance controls, technical architecture details

### `/use-cases`
- **Description**: Use cases for retail users and bank partners
- **Access**: Public
- **Components**: Retail user journey, bank partner benefits, Pakistan market opportunity

### `/contact`
- **Description**: Contact form and contact information
- **Access**: Public
- **Components**: Contact form, contact details, business inquiry information

### `/login`
- **Description**: User authentication/login page
- **Access**: Public (redirects to dashboard if already logged in)
- **Components**: Login form with email and password

## Protected Routes (Authentication Required)

These routes require users to be logged in. Unauthenticated users will be redirected to `/login`.

### `/dashboard`
- **Description**: User dashboard/homepage showing portfolio overview and quick actions
- **Access**: Protected (requires login)
- **Components**: 
  - Welcome header
  - Stats grid (Total Assets, Tokenized Value, Active Loans, Portfolio Growth)
  - Quick actions (Trade Assets, Request Loan, Deposit Assets)
  - Recent activity table
  - Security information

### `/trading`
- **Description**: Trading platform for buying, selling, and trading tokenized assets
- **Access**: Protected (requires login)
- **Components**:
  - Trading interface with Buy/Sell/Trade tabs
  - Asset listing with prices and market data
  - Order form
  - Recent trades
  - Market overview (Market Cap, 24h Volume, Active Users)

## Navigation Structure

### Public Navigation (when not logged in)
- Home
- Solution
- Features
- Use Cases
- Contact
- **Login Button**

### Authenticated Navigation (when logged in)
- Home
- Solution
- Features
- Use Cases
- Contact
- **Dashboard** (new)
- **Trading** (new)
- **User name display**
- **Logout Button**

## Route Protection

- Routes `/dashboard` and `/trading` automatically redirect to `/login` if user is not authenticated
- The `/login` route redirects to `/dashboard` if user is already logged in
- Authentication state is maintained in localStorage and through React Context API

## Demo Credentials

For demo purposes, any email and password combination will work. The system accepts any credentials for testing.

Example:
- Email: `user@example.com`
- Password: `password123`

## Notes

- All routes are client-side rendered using Next.js
- Authentication is handled through React Context (`AuthContext`)
- The navigation bar shows/hides based on authentication state
- Login page has a minimal layout (no navigation/footer)