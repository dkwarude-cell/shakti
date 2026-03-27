# Tech-Horizon Frontend - Complete Documentation

## Overview

This is a comprehensive React-based frontend for the Tech-Horizon donation and supply management system. It provides role-based interfaces for three user types: Donors, Institutes, and Suppliers.

## Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Library | 18.2.0 |
| **Vite** | Build Tool | 5.0.8 |
| **React Router** | Routing | 6.20.1 |
| **Tailwind CSS** | Styling | 3.3.6 |
| **Axios** | HTTP Client | 1.6.2 |
| **Zustand** | State Management | 4.4.2 |

## Installation

### Quick Start
```bash
# 1. Navigate to project
cd TechHorizonFrontend

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Start development server
npm run dev
```

The application opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## Architecture

### Component Hierarchy
```
App
├── Navbar (Global)
└── Routes
    ├── Public Routes
    │   ├── /login
    │   ├── /auth/donor/*
    │   ├── /auth/institute/*
    │   └── /auth/supplier/*
    └── Protected Routes
        ├── /donor/dashboard
        ├── /institute/dashboard
        └── /supplier/dashboard
```

### Data Flow
```
User Input
    ↓
Component State (Form)
    ↓
Service Layer (API Call)
    ↓
Axios Client (Request/Response)
    ↓
Zustand Store (State Update)
    ↓
Component Re-render
```

## User Flows

### 1. Donor Flow
```
Login Page
    ↓
Role Selection → Donor Sign-In/Sign-Up
    ↓
Donor Dashboard
├── View Statistics (Donations, Requirements)
├── Browse Active Requirements
├── Make Donations
└── View Donation History
```

### 2. Institute Flow
```
Login Page
    ↓
Role Selection → Institute Sign-In/Sign-Up
    ↓
Institute Dashboard
├── View Statistics (Requirements, Received Items)
├── Create New Requirements
├── Manage Requirements
└── Track Donations Received
```

### 3. Supplier Flow
```
Login Page
    ↓
Role Selection → Supplier Sign-In/Sign-Up
    ↓
Supplier Dashboard
├── View Statistics (Products, Inventory Value)
├── Add/Edit/Delete Products
└── Manage Inventory
```

## Authentication System

### JWT Token Flow
1. User provides credentials (Sign In/Sign Up)
2. Backend validates and returns JWT token
3. Token stored in `localStorage`
4. Token added to every API request header: `Authorization: Bearer <token>`
5. Token checked on protected routes
6. Automatic redirect to login on token expiration (401)

### Auth Store (Zustand)
```javascript
// Access in any component
const { user, role, isAuthenticated, login, logout } = useAuthStore();
```

## API Integration

### Service Layer Architecture
Each entity has a dedicated service file:

#### AuthService
```javascript
donorSignUp(data)      // Register donor
donorSignIn(data)      // Login donor
instituteSignUp(data)  // Register institute
[... similar for institute/supplier ...]
setToken(token)        // Store JWT
getToken()             // Retrieve JWT
logout()               // Clear auth data
```

#### RequirementService
```javascript
getRequirements()      // Fetch all requirements
getRequirementById(id) // Fetch specific requirement
createRequirement(data) // Create new requirement
updateRequirement(id, data)
deleteRequirement(id)
```

#### DonationService
```javascript
getDonations()         // Fetch all donations
getUserDonations()     // Fetch user's donations
createDonation(data)   // Create new donation
```

#### SupplierProductService
```javascript
getProducts()          // Fetch all products
getProductById(id)     // Fetch specific product
createProduct(data)    // Add new product
updateProduct(id, data)
deleteProduct(id)
```

### Axios Interceptors
- Request Interceptor: Adds JWT token to all requests
- Response Interceptor: Handles 401 errors, redirects to login

## Component Library

### Reusable Components

#### `<Card />`
Wrapper for content sections with shadow and padding
```jsx
<Card className="custom-class">
  Content here
</Card>
```

#### `<Button />`
Styled button with variants and loading state
```jsx
<Button variant="primary|danger|success|outline" isLoading={false}>
  Click Me
</Button>
```

#### `<Input />`
Form input with error display
```jsx
<Input 
  label="Email"
  type="email"
  name="email"
  value={value}
  onChange={handler}
  error={errorMessage}
/>
```

#### `<ProtectedRoute />`
Wraps protected pages, checks authentication and role
```jsx
<ProtectedRoute requiredRole="donor">
  <DonorDashboard />
</ProtectedRoute>
```

### Custom Hooks

#### `useForm`
Manages form state, validation, and submission
```javascript
const {
  values,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
  resetForm,
  setValues,
} = useForm(initialValues, onSubmitFn);
```

#### `useFetch`
Handles API data fetching with loading and error states
```javascript
const { data, loading, error, fetch } = useFetch(fetchFn, dependencies);
```

## State Management (Zustand)

### Auth Store
```javascript
{
  user,              // Current user object
  role,              // User role (donor/institute/supplier)
  token,             // JWT token
  isAuthenticated,   // Boolean flag
  login(),           // Login method
  logout(),          // Logout method
  setUser(),         // Update user info
}
```

Store is persisted in `localStorage`, survives page refresh.

## Styling System

### Tailwind Configuration
- Custom colors in `tailwind.config.js`
- Primary: `#1f2937` (dark gray)
- Secondary: `#3b82f6` (blue)
- Success: `#10b981` (green)
- Danger: `#ef4444` (red)
- Warning: `#f59e0b` (amber)
- Info: `#0ea5e9` (cyan)

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Example: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Error Handling

### Global Error Handling
- API errors caught in try-catch blocks
- Error messages displayed to user
- 401 errors trigger automatic logout

### Input Validation
- Client-side validation in forms
- Server-side validation by backend
- Error messages shown inline

## Environment Variables

```env
# Backend API
REACT_APP_API_BASE_URL=http://localhost:8080

# Optional: API version (default: v1)
REACT_APP_API_VERSION=v1
```

## File Structure Explanation

```
src/
├── components/         # Reusable components
│   ├── Navbar.jsx     # Navigation bar
│   ├── ProtectedRoute.jsx  # Auth wrapper
│   ├── Card.jsx       # Card container
│   ├── Button.jsx     # Styled button
│   └── Input.jsx      # Form input
│
├── pages/             # Page components
│   ├── Auth/
│   │   ├── LoginPage.jsx       # Role selection
│   │   ├── DonorSignUp.jsx
│   │   ├── DonorSignIn.jsx
│   │   ├── InstituteSignUp.jsx
│   │   ├── InstituteSignIn.jsx
│   │   ├── SupplierSignUp.jsx
│   │   └── SupplierSignIn.jsx
│   │
│   ├── Donor/
│   │   └── DonorDashboard.jsx  # Main donor page
│   │
│   ├── Institute/
│   │   └── InstituteDashboard.jsx  # Main institute page
│   │
│   ├── Supplier/
│   │   └── SupplierDashboard.jsx   # Main supplier page
│   │
│   ├── Home.jsx       # Home page
│   ├── NotFound.jsx   # 404 page
│   └── Unauthorized.jsx # 403 page
│
├── services/          # API communication
│   ├── axiosClient.js      # Configured axios instance
│   ├── AuthService.js      # Auth endpoints
│   ├── RequirementService.js
│   ├── DonationService.js
│   └── SupplierProductService.js
│
├── store/             # State management
│   └── authStore.js   # Zustand store
│
├── hooks/             # Custom hooks
│   └── useForm.js     # Form utilities
│
├── config/            # Configuration
│   └── api.js         # API endpoints
│
├── utils/             # Utilities
│   └── helpers.js     # Helper functions
│
├── App.jsx            # Main app component with routing
├── index.jsx          # Entry point
└── index.css          # Tailwind & global styles
```

## Development Workflow

### Creating a New Feature

#### 1. Create API Service
```javascript
// services/NewService.js
import apiClient from './axiosClient';
import { API_ENDPOINTS } from '../config/api';

class NewService {
  async getItems() {
    return apiClient.get(API_ENDPOINTS.ITEMS.LIST);
  }
}
export default new NewService();
```

#### 2. Create Page Component
```jsx
// pages/NewPage.jsx
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import NewService from '../services/NewService';

export default function NewPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await NewService.getItems();
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      {/* Content */}
    </div>
  );
}
```

#### 3. Add Route
```jsx
// App.jsx
<Route path="/new-page" element={<NewPage />} />
```

## Performance Optimization

### Best Practices
- Use lazy loading for routes (Future enhancement)
- Memoize expensive computations
- Avoid unnecessary re-renders
- Cache API responses when possible

### Code Splitting
```jsx
import { lazy, Suspense } from 'react';
const DonorDashboard = lazy(() => import('./pages/Donor/DonorDashboard'));

<Suspense fallback={<div>Loading...</div>}>
  <DonorDashboard />
</Suspense>
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in dashboard

### Environment Variables in Production
Always set `REACT_APP_API_BASE_URL` to your production backend URL.

## Testing (Future Enhancement)

Recommended testing setup:
- Jest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

#### 1. API Calls Failing
- Check backend is running on correct port
- Verify `REACT_APP_API_BASE_URL` in `.env`
- Check CORS configuration in backend

#### 2. Authentication Not Working
- Clear localStorage
- Check JWT token format
- Verify token in Authorization header

#### 3. Styles Not Applied
- Rebuild Tailwind CSS: `npm run dev`
- Check class names spelling
- Verify Tailwind config includes file paths

#### 4. Routes Not Found
- Ensure all routes are defined in `App.jsx`
- Check React Router version compatibility
- Verify protected routes have correct role

## Performance Metrics

### Recommended Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Updates & Maintenance

### Updating Dependencies
```bash
npm update
npm outdated
```

### Security
- Keep dependencies updated
- Use environment variables for sensitive data
- Validate all user inputs
- Use HTTPS in production

## Getting Help

- Check SETUP.md for quick start guide
- Review individual service files for API details
- Inspect browser console for errors
- Test with Postman/Thunder Client for API validation

## License

MIT License - See LICENSE file for details
