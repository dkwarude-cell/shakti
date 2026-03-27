import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AuthService from '../../services/AuthService';
import useAuthStore from '../../store/authStore';

export default function SupplierSignIn() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await AuthService.supplierSignIn(formData);
      const data = response.data.data || response.data;
      
      if (data.token) {
        login(data.supplier || data, data.token, 'supplier');
        navigate('/supplier/dashboard');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Sign in failed';
      setErrors({ submit: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-tertiary">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary">
          Supplier Sign In
        </h2>

        {errors.submit && (
          <div className="bg-danger text-white p-3 rounded mb-4 font-bold">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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

          <Button
            type="submit"
            isLoading={isLoading}
            variant="supplier"
            className="w-full mb-4"
          >
            Sign In
          </Button>
        </form>

        <p className="text-center text-gray-300">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/auth/supplier/signup')}
            className="text-secondary hover:text-yellow-300 underline font-bold transition"
          >
            Register here
          </button>
        </p>
      </Card>
    </div>
  );
}
