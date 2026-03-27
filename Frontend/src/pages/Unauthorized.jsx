import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-danger mb-4">403</div>
        <h1 className="text-4xl font-bold text-white mb-3">Unauthorized Access</h1>
        <p className="text-gray-300 text-lg mb-8">
          You don't have permission to access this page. Please log in with the correct role.
        </p>
        <Button
          onClick={() => navigate('/login')}
          variant="primary"
        >
          Go to Login
        </Button>
      </div>
    </div>
  );
}
