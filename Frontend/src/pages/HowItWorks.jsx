import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-tertiary to-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">How शक्ति Link Works</h1>
          <p className="text-xl text-gray-300">
            A transparent, three-step process connecting donors, institutes, and suppliers
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1: For Institutes */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Step 1: Institutes Post Needs</h3>
            <p className="text-gray-300 mb-6">
              Institutes create detailed requirement posts specifying what supplies or donations they need, including quantity, urgency, and specifications.
            </p>
            <Button onClick={() => navigate('/auth/institute/signin')} variant="primary" className="w-full">
              Sign In as Institute
            </Button>
          </div>

          {/* Step 2: Donors & Suppliers Respond */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Step 2: Connect & Agree</h3>
            <p className="text-gray-300 mb-6">
              Donors and suppliers view requirements and express interest. Direct communication allows for negotiation and logistics planning.
            </p>
            <Button onClick={() => navigate('/auth/donor/signin')} variant="primary" className="w-full">
              Sign In as Donor
            </Button>
          </div>

          {/* Step 3: Track & Complete */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Step 3: Track & Complete</h3>
            <p className="text-gray-300 mb-6">
              Real-time tracking of donations and supplies. Institutes confirm receipt, donors verify impact, and suppliers manage inventory seamlessly.
            </p>
            <Button onClick={() => navigate('/auth/supplier/signin')} variant="primary" className="w-full">
              Sign In as Supplier
            </Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-tertiary border-l-4 border-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-secondary mb-6">मुख्य विशेषताएं (Key Features)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4">🔒</span>
              <div>
                <h4 className="font-bold text-white mb-2">Secure & Transparent</h4>
                <p className="text-gray-300">All transactions are encrypted and verifiable</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4">⚡</span>
              <div>
                <h4 className="font-bold text-white mb-2">Real-Time Updates</h4>
                <p className="text-gray-300">Track status changes instantly</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4">📊</span>
              <div>
                <h4 className="font-bold text-white mb-2">Impact Reports</h4>
                <p className="text-gray-300">See the tangible impact of your donations</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4">🌐</span>
              <div>
                <h4 className="font-bold text-white mb-2">Wide Network</h4>
                <p className="text-gray-300">Connect with hundreds of verified organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
