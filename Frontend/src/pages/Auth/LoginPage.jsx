import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section with Background Overlay */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 15, 30, 0.7), rgba(15, 15, 30, 0.7)), url()',
          backgroundColor: '#1a1a2e'
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-secondary">Tech</span>-Horizon
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-3">
            Connecting donors, institutes, and suppliers
          </p>
          <p className="text-lg text-gray-300">
            A new way to donate—fraud-free, impactful, and transparent.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Values.
              <br />
              Our Foundation.
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Connecting donors, institutes, and suppliers with transparency and trust.
              Join us in making a real impact.
            </p>
          </div>

          {/* Role Selection - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Donor Card */}
            <div className="group">
              <Card className="h-full bg-gradient-to-br from-tertiary to-primary hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-donor rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center">
                      Become a Donor
                    </h3>
                  </div>
                  <p className="text-gray-300 text-center mb-8 flex-grow">
                    Make a difference by donating essentials to institutions in need. Track your impact and see real change.
                  </p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => navigate('/auth/donor/signin')}
                      variant="donor"
                      className="w-full"
                    >
                      Sign In as Donor
                    </Button>
                    <Button
                      onClick={() => navigate('/auth/donor/signup')}
                      variant="outline-donor"
                      className="w-full"
                    >
                      Register as Donor
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Institute Card */}
            <div className="group">
              <Card className="h-full bg-gradient-to-br from-tertiary to-primary hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-institute rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center">
                      Become an Institute
                    </h3>
                  </div>
                  <p className="text-gray-300 text-center mb-8 flex-grow">
                    Post your requirements and connect with generous donors ready to support your institution's mission.
                  </p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => navigate('/auth/institute/signin')}
                      variant="institute"
                      className="w-full"
                    >
                      Sign In as Institute
                    </Button>
                    <Button
                      onClick={() => navigate('/auth/institute/signup')}
                      variant="outline-institute"
                      className="w-full"
                    >
                      Register as Institute
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Supplier Card */}
            <div className="group">
              <Card className="h-full bg-gradient-to-br from-tertiary to-primary hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-supplier rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center">
                      Become a Supplier
                    </h3>
                  </div>
                  <p className="text-gray-300 text-center mb-8 flex-grow">
                    Expand your business by connecting with institutions seeking quality products and services.
                  </p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => navigate('/auth/supplier/signin')}
                      variant="supplier"
                      className="w-full"
                    >
                      Sign In as Supplier
                    </Button>
                    <Button
                      onClick={() => navigate('/auth/supplier/signup')}
                      variant="outline-supplier"
                      className="w-full"
                    >
                      Register as Supplier
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature Highlight */}
          <Card className="bg-gradient-to-r from-secondary to-yellow-600 text-primary p-8">
            <h3 className="text-3xl font-bold mb-4">Why Tech-Horizon?</h3>
            <ul className="space-y-3 text-lg font-semibold">
              <li>✓ Fraud-free donation system with full transparency</li>
              <li>✓ Real-time tracking of donations and requirements</li>
              <li>✓ Secure and trustworthy platform</li>
              <li>✓ Direct connection between donors, institutes, and suppliers</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
