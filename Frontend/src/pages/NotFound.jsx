import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-secondary mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-300 text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate('/login')}
          variant="primary"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
