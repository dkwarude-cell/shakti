import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary via-tertiary to-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            शक्ति<span className="text-secondary">LINK</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Empowering Donors, Institutes, and Suppliers to Make a Difference
          </p>
          <Button
            onClick={() => navigate('/login')}
            variant="primary"
            className="px-8 py-3 text-lg"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Donors */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">💝</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">For Donors</h3>
            <p className="text-gray-300">
              Discover urgent needs from institutes and contribute donations to help those in need.
              Track your donations and make a real impact.
            </p>
          </div>

          {/* Institutes */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">For Institutes</h3>
            <p className="text-gray-300">
              Post your urgent requirements and connect with generous donors. Manage all your
              received donations in one place.
            </p>
          </div>

          {/* Suppliers */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">For Suppliers</h3>
            <p className="text-gray-300">
              Manage your product inventory and connect with institutes looking for supplies.
              Grow your business with our platform.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-tertiary border-l-4 border-secondary p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-6">Why Choose ShaktiLINK?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-secondary mr-3 text-xl">✓</span>
              Secure and transparent donation tracking
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-3 text-xl">✓</span>
              Connect institutes with donors and suppliers
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-3 text-xl">✓</span>
              Real-time inventory management for suppliers
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-3 text-xl">✓</span>
              Verified user accounts and secure transactions
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-3 text-xl">✓</span>
              Impact reporting and donation history
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-donor/10 p-12 rounded-lg border border-secondary">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-gray-300 mb-8">
            Join thousands of donors, institutes, and suppliers already using ShaktiLINK
          </p>
          <Button
            onClick={() => navigate('/login')}
            variant="primary"
            className="px-8 py-3 text-lg"
          >
            Join Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-tertiary bg-primary/50 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 शक्तिLINK. Empowering communities, one donation at a time.</p>
        </div>
      </div>
    </div>
  );
}
