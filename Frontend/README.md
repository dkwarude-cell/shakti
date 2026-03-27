# Tech-Horizon Frontend

A modern React application for the Tech-Horizon donation and supply management platform.

## Features

- **Multi-Role Support**: Separate interfaces for Donors, Institutes, and Suppliers
- **Authentication**: JWT-based login and signup for all user types
- **Dashboard**: Role-specific dashboards with key metrics
- **Requirements Management**: View and manage supply requirements
- **Donation Tracking**: Track donations made by donors
- **Supplier Products**: Browse and manage supplier products
- **Responsive Design**: Built with Tailwind CSS for all screen sizes

## Tech Stack

- **React 18** - UI Library
- **React Router 6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS framework

## Setup

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
cd TechHorizonFrontend
npm install
```

2. Create `.env` file (copy from `.env.example`)
```bash
cp .env.example .env
```

3. Update the API base URL in `.env`
```
REACT_APP_API_BASE_URL=http://localhost:8080
```

### Running the App

```bash
npm start
```

The app will start at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Auth/           # Authentication components
│   ├── Common/         # Common UI components
│   ├── Donor/          # Donor-specific components
│   ├── Institute/      # Institute-specific components
│   └── Supplier/       # Supplier-specific components
├── pages/              # Page components
│   ├── Auth/          # Authentication pages
│   ├── Donor/         # Donor pages
│   ├── Institute/     # Institute pages
│   └── Supplier/      # Supplier pages
├── services/          # API services
├── store/             # Zustand state management
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── App.jsx            # Main App component
└── index.jsx          # Entry point
```

## API Integration

The application connects to the Tech-Horizon backend API. Ensure the backend is running on `http://localhost:8080` or update the API URL in `.env`.

### Endpoints Used

- **Authentication**: `/auth/donor/sign-up`, `/auth/donor/sign-in`, etc.
- **Requirements**: `/api/requirements`
- **Donations**: `/api/donations`
- **Supplier Products**: `/api/supplier-products`

## Environment Variables

- `REACT_APP_API_BASE_URL`: Backend API base URL

## User Flow

### Donor
1. Sign up / Sign in
2. View dashboard with donation statistics
3. Browse requirements
4. Make donations
5. View donation history

### Institute
1. Sign up / Sign in
2. View dashboard with requirement status
3. Create and manage requirements
4. View donations received
5. Track fulfillment progress

### Supplier
1. Sign up / Sign in
2. View dashboard
3. Manage products
4. View potential requirements
5. Track product visibility

## Development

### Folder Structure Best Practices

- Keep components small and focused
- Use custom hooks for logic reuse
- API calls go through the services layer
- State is managed with Zustand

### Building Components

Example component structure:
```jsx
import { useState } from 'react';

export default function ComponentName() {
  const [state, setState] = useState(null);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {/* Component content */}
    </div>
  );
}
```

## Authentication Flow

1. User selects role (Donor/Institute/Supplier)
2. Signs up with email, password, and role-specific info
3. Receives JWT token
4. Token stored in localStorage
5. Token sent with API requests via Authorization header
6. Automatic logout on token expiration

## Contributing

1. Create a new branch for features
2. Follow the existing code style
3. Test thoroughly before submitting
4. Update README if adding new features

## License

MIT
