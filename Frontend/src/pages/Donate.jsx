import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Donate() {
  const navigate = useNavigate();

  const donationImpact = [
    {
      amount: '₹500',
      impact: 'Provide basic medical supplies to 1 patient',
      icon: '💊',
    },
    {
      amount: '₹1,000',
      impact: 'Supply educational materials for 10 students',
      icon: '📚',
    },
    {
      amount: '₹5,000',
      impact: 'Support an entire community program for a month',
      icon: '🤝',
    },
    {
      amount: '₹10,000',
      impact: 'Fund crucial equipment for a small institution',
      icon: '⚙️',
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary to-yellow-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">Make a Difference Today</h1>
          <p className="text-xl text-primary mb-8">
            Your donation helps institutions, communities, and individuals in need. 100% transparent, 100% impact.
          </p>
          <Button onClick={() => navigate('/auth/donor/signin')} variant="primary" className="px-8 py-3 text-lg">
            Start Donating Now
          </Button>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">See Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {donationImpact.map((item, index) => (
            <Card key={index} className="bg-tertiary border-2 border-secondary p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-secondary mb-2">{item.amount}</h3>
              <p className="text-gray-300">{item.impact}</p>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-tertiary border-l-4 border-secondary p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">Why Donate Through शक्ति Link?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">🎯</span>
              <div>
                <h4 className="font-bold text-white mb-2">Direct Impact</h4>
                <p className="text-gray-300">Your donation directly reaches the institutions that need it most. No middlemen.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">📊</span>
              <div>
                <h4 className="font-bold text-white mb-2">Full Transparency</h4>
                <p className="text-gray-300">Track exactly how your donation is used and see real-time updates from recipients.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">🔒</span>
              <div>
                <h4 className="font-bold text-white mb-2">Secure Giving</h4>
                <p className="text-gray-300">All transactions are encrypted and secure. Your personal information is protected.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">📜</span>
              <div>
                <h4 className="font-bold text-white mb-2">Tax Benefits</h4>
                <p className="text-gray-300">Get proper receipts and tax deduction certificates for your charitable contributions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-tertiary border-2 border-secondary p-8 text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Browse Requests</h3>
            <p className="text-gray-300">Explore active requests from verified institutions and communities.</p>
          </Card>
          <Card className="bg-tertiary border-2 border-secondary p-8 text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Make Donation</h3>
            <p className="text-gray-300">Choose your donation amount and secure payment method.</p>
          </Card>
          <Card className="bg-tertiary border-2 border-secondary p-8 text-center">
            <div className="text-5xl mb-4">3️⃣</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Track Impact</h3>
            <p className="text-gray-300">Receive updates on how your donation has made a real difference.</p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary/10 to-yellow-600/10 p-12 rounded-lg border border-secondary text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of donors who are helping build a better future through collaborative giving.
          </p>
          <Button onClick={() => navigate('/auth/donor/signin')} variant="primary" className="px-8 py-3 text-lg">
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
}
