import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AuthService from '../../services/AuthService';
import useAuthStore from '../../store/authStore';

export default function SupplierSignUp() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    contactNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const response = await AuthService.supplierSignUp(formData);
      const data = response.data.data || response.data;
      
      if (data.token) {
        login(data.supplier || data, data.token, 'supplier');
        setSuccessMessage('Sign up successful! Redirecting...');
        setTimeout(() => navigate('/supplier/dashboard'), 1500);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Sign up failed';
      setErrors({ submit: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-tertiary">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary">
          Become a Supplier
        </h2>

        {successMessage && (
          <div className="bg-success text-white p-3 rounded mb-4 font-bold">
            {successMessage}
          </div>
        )}

        {errors.submit && (
          <div className="bg-danger text-white p-3 rounded mb-4 font-bold">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Company Name"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            error={errors.companyName}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            error={errors.password}
          />

          <Input
            label="Contact Number"
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            error={errors.contactNumber}
          />

          <Input
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            error={errors.address}
          />

          <Button
            type="submit"
            isLoading={isLoading}
            variant="supplier"
            className="w-full mb-4"
          >
            Register as Supplier
          </Button>
        </form>

        <p className="text-center text-gray-300">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-secondary hover:text-yellow-300 underline font-bold transition"
          >
            Sign In
          </button>
        </p>
      </Card>
    </div>
  );
}
