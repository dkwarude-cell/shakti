import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Auth Pages
import LoginPage from './pages/Auth/LoginPage';
import DonorSignUp from './pages/Auth/DonorSignUp';
import DonorSignIn from './pages/Auth/DonorSignIn';
import InstituteSignUp from './pages/Auth/InstituteSignUp';
import InstituteSignIn from './pages/Auth/InstituteSignIn';
import SupplierSignUp from './pages/Auth/SupplierSignUp';
import SupplierSignIn from './pages/Auth/SupplierSignIn';

// Dashboard Pages
import DonorDashboard from './pages/Donor/DonorDashboard';
import InstituteDashboard from './pages/Institute/InstituteDashboard';
import SupplierDashboard from './pages/Supplier/SupplierDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Donor Routes */}
        <Route path="/auth/donor/signup" element={<DonorSignUp />} />
        <Route path="/auth/donor/signin" element={<DonorSignIn />} />
        <Route
          path="/donor/dashboard"
          element={
            <ProtectedRoute requiredRole="donor">
              <DonorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Institute Routes */}
        <Route path="/auth/institute/signup" element={<InstituteSignUp />} />
        <Route path="/auth/institute/signin" element={<InstituteSignIn />} />
        <Route
          path="/institute/dashboard"
          element={
            <ProtectedRoute requiredRole="institute">
              <InstituteDashboard />
            </ProtectedRoute>
          }
        />

        {/* Supplier Routes */}
        <Route path="/auth/supplier/signup" element={<SupplierSignUp />} />
        <Route path="/auth/supplier/signin" element={<SupplierSignIn />} />
        <Route
          path="/supplier/dashboard"
          element={
            <ProtectedRoute requiredRole="supplier">
              <SupplierDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
