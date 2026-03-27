# Tech-Horizon Frontend - Quick Start Guide

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Tech-Horizon backend running on `http://localhost:8080`

### Step 1: Install Dependencies
```bash
cd TechHorizonFrontend
npm install
```

### Step 2: Configure Environment
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Update `.env` with your backend URL:
```
REACT_APP_API_BASE_URL=http://localhost:8080
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Project Structure

```
TechHorizonFrontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   └── Input.jsx
│   ├── pages/               # Page components
│   │   ├── Auth/           # Login/signup pages
│   │   ├── Donor/          # Donor dashboard
│   │   ├── Institute/      # Institute dashboard
│   │   └── Supplier/       # Supplier dashboard
│   ├── services/            # API service layer
│   │   ├── axiosClient.js
│   │   ├── AuthService.js
│   │   ├── RequirementService.js
│   │   ├── DonationService.js
│   │   └── SupplierProductService.js
│   ├── store/              # State management (Zustand)
│   │   └── authStore.js
│   ├── hooks/              # Custom React hooks
│   │   └── useForm.js
│   ├── config/             # Configuration files
│   │   └── api.js
│   ├── utils/              # Utility functions
│   │   └── helpers.js
│   ├── App.jsx             # Main app component
│   ├── index.jsx           # Entry point
│   └── index.css           # Tailwind CSS
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
└── package.json
```

## Available Routes

### Authentication
- `/login` - Role selection page
- `/auth/donor/signin` - Donor sign-in
- `/auth/donor/signup` - Donor registration
- `/auth/institute/signin` - Institute sign-in
- `/auth/institute/signup` - Institute registration
- `/auth/supplier/signin` - Supplier sign-in
- `/auth/supplier/signup` - Supplier registration

### Dashboards (Protected)
- `/donor/dashboard` - Donor dashboard
- `/institute/dashboard` - Institute dashboard
- `/supplier/dashboard` - Supplier dashboard

## Key Features Implemented

### 1. Authentication
- Multi-role authentication (Donor, Institute, Supplier)
- JWT token-based authentication
- Automatic token refresh
- Protected routes with role verification

### 2. Donor Features
- View available requirements
- Make donations
- Track donation history
- View donation statistics

### 3. Institute Features
- Create and manage requirements
- Track donation progress
- View requirement details
- Monitor fulfillment status

### 4. Supplier Features
- Add/edit/delete products
- Manage inventory
- Track product value
- View product analytics

### 5. Common Features
- Responsive design (Mobile, Tablet, Desktop)
- Error handling
- Loading states
- Toast notifications
- Form validation

## API Integration

All API calls are made through dedicated service files in `src/services/`. Each service handles:
- Request configuration
- Error handling
- Response processing
- Header management (Auth tokens)

### Service Files
- `AuthService.js` - Authentication endpoints
- `RequirementService.js` - Requirement CRUD
- `DonationService.js` - Donation operations
- `SupplierProductService.js` - Product management

## State Management

Using **Zustand** for state management:
- `authStore.js` - Manages authentication state
- User login/logout
- Token management
- Role tracking

## Styling

- **Tailwind CSS** for utility-first styling
- Pre-defined color scheme
- Responsive breakpoints
- Custom component classes

## Development Tips

### Create a New Component
```jsx
export default function ComponentName() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {/* Component content */}
    </div>
  );
}
```

### Make API Calls
```jsx
import { useFetch } from '../hooks/useForm';
import RequirementService from '../services/RequirementService';

const { data, loading, error } = useFetch(
  () => RequirementService.getRequirements()
);
```

### Use Form Validation
```jsx
import { useForm } from '../hooks/useForm';

const { values, errors, handleChange, handleSubmit } = useForm(
  { email: '' },
  async (values) => {
    // Handle submission
  }
);
```

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

## Troubleshooting

### CORS Issues
Ensure backend is running and CORS is enabled. Check `REACT_APP_API_BASE_URL` in `.env`.

### 404 API Errors
Verify backend endpoints match the API configuration in `src/config/api.js`.

### Authentication Issues
- Clear browser localStorage
- Check token expiration
- Verify backend secret key matches frontend expectations

## Deployment

### Recommended Platforms
- Vercel (Recommended)
- Netlify
- GitHub Pages
- Azure Static Web Apps
- AWS S3 + CloudFront

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

### Build & Environment Setup
Set `REACT_APP_API_BASE_URL` in platform environment variables.

## Support & Documentation

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com)
