import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

export default function TrackDonations() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-tertiary to-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">Track Your Donations</h1>
          <p className="text-xl text-gray-300">
            Monitor your donations in real-time and see the impact you've made
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left - Features */}
          <div className="space-y-6">
            <Card className="bg-tertiary border-2 border-secondary p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Real-Time Tracking</h2>
              <p className="text-gray-300 mb-4">
                Follow your donation every step of the way from verification to delivery to impact measurement.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-white">Donation verified and processed</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-white">Dispatched to institution</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-white">Received and acknowledged</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-white">Impact verified and reported</span>
                </div>
              </div>
            </Card>

            <Card className="bg-tertiary border-2 border-secondary p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Detailed Reports</h2>
              <p className="text-gray-300 mb-4">
                Access comprehensive reports about how your donations have made a real difference:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• How many people benefited</li>
                <li>• Specific use cases and outcomes</li>
                <li>• Photos and testimonials from recipients</li>
                <li>• Detailed financial breakdowns</li>
              </ul>
            </Card>
          </div>

          {/* Right - Dashboard Preview */}
          <div>
            <Card className="bg-tertiary border-2 border-secondary p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Your Donation Dashboard</h2>
              
              <div className="space-y-4 mb-8">
                {/* Sample Donation 1 */}
                <div className="bg-primary border border-secondary rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white">Medical Supplies for Hospital</h4>
                      <p className="text-sm text-gray-400">₹5,000 • Jan 15, 2024</p>
                    </div>
                    <span className="bg-green-500 text-primary px-3 py-1 rounded text-sm font-bold">Completed</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded h-2 mb-2">
                    <div className="bg-secondary h-2 rounded" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400">Delivered to 500+ patients</p>
                </div>

                {/* Sample Donation 2 */}
                <div className="bg-primary border border-secondary rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white">School Books & Supplies</h4>
                      <p className="text-sm text-gray-400">₹2,500 • Feb 20, 2024</p>
                    </div>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold">In Transit</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded h-2 mb-2">
                    <div className="bg-secondary h-2 rounded" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400">Expected delivery: Mar 5, 2024</p>
                </div>

                {/* Sample Donation 3 */}
                <div className="bg-primary border border-secondary rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white">Community Health Program</h4>
                      <p className="text-sm text-gray-400">₹3,000 • Mar 1, 2024</p>
                    </div>
                    <span className="bg-yellow-500 text-primary px-3 py-1 rounded text-sm font-bold">Verified</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded h-2 mb-2">
                    <div className="bg-secondary h-2 rounded" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400">Preparing for dispatch</p>
                </div>
              </div>

              <Button 
                onClick={() => navigate('/auth/donor/signin')} 
                variant="primary" 
                className="w-full py-3"
              >
                Sign In to View Full Dashboard
              </Button>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-tertiary border-2 border-secondary p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
            <p className="text-gray-300">Active Donors</p>
          </Card>
          <Card className="bg-tertiary border-2 border-secondary p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">₹25 Cr</div>
            <p className="text-gray-300">Total Donations Tracked</p>
          </Card>
          <Card className="bg-tertiary border-2 border-secondary p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <p className="text-gray-300">Institutions Helped</p>
          </Card>
          <Card className="bg-tertiary border-2 border-secondary p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">1M+</div>
            <p className="text-gray-300">Lives Impacted</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
