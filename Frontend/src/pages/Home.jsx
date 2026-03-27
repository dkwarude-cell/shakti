import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();

  const impactStories = [
    {
      title: 'Education for All',
      description: 'Provided educational materials to 500+ students',
      image: 'https://images.unsplash.com/photo-1427504494785-a9f1b524a344?w=600&h=400&fit=crop',
      beneficiaries: '500+ Children',
    },
    {
      title: 'Medical Support',
      description: 'Distributed medicines and medical equipment to rural clinics',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
      beneficiaries: '1000+ People',
    },
    {
      title: 'Food Security',
      description: 'Supplied nutritious meals to orphanages and shelters',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      beneficiaries: '200+ Children',
    },
    {
      title: 'Community Support',
      description: 'Built learning centers and community spaces',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      beneficiaries: '5000+ Community Members',
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(25, 35, 55, 0.8) 100%), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            शक्ति<span className="text-secondary">LINK</span>
          </h1>
          <p className="text-2xl text-gray-200 mb-6 drop-shadow-md">
            Connecting Donors, Institutes, and Suppliers
          </p>
          <p className="text-xl text-gray-300 mb-10 drop-shadow-md font-light">
            A transparent platform for charitable giving that transforms lives
          </p>
          <Button
            onClick={() => navigate('/login')}
            variant="primary"
            className="px-10 py-4 text-xl shadow-2xl hover:scale-105 transition "
          >
            Start Making Impact Today
          </Button>
        </div>
      </div>

      {/* Impact Stories Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center text-secondary mb-4">
          Real Impact, Real Change
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16">
          See how शक्ति Link is transforming lives across communities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStories.map((story, index) => (
            <div
              key={index}
              className="group bg-tertiary border-2 border-secondary rounded-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{story.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{story.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-secondary">
                  <span className="text-lg">👥</span>
                  <span className="text-secondary font-bold">{story.beneficiaries}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-secondary mb-16">
          How शक्ति Link Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Donors */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=600&h=300&fit=crop"
                alt="Donors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">For Donors</h3>
              <p className="text-gray-300">
                Discover urgent needs from institutes and contribute donations to help those in need.
                Track your donations and make a real impact.
              </p>
            </div>
          </div>

          {/* Institutes */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1427504494785-a9f1b524a344?w=600&h=300&fit=crop"
                alt="Institutes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">For Institutes</h3>
              <p className="text-gray-300">
                Post your urgent requirements and connect with generous donors. Manage all your
                received donations in one place.
              </p>
            </div>
          </div>

          {/* Suppliers */}
          <div className="bg-tertiary border-2 border-secondary rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop"
                alt="Suppliers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">For Suppliers</h3>
              <p className="text-gray-300">
                Manage your product inventory and connect with institutes looking for supplies.
                Grow your business with our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-tertiary to-primary border-l-4 border-secondary p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-6">Why Choose ShaktiLINK?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-secondary mr-4 text-2xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-1">Secure & Transparent</h4>
                <p className="text-gray-300 text-sm">All transactions encrypted and verifiable</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary mr-4 text-2xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-1">Real-Time Tracking</h4>
                <p className="text-gray-300 text-sm">Monitor your donations every step of the way</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary mr-4 text-2xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-1">Impact Reports</h4>
                <p className="text-gray-300 text-sm">See exactly how your donation makes a difference</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary mr-4 text-2xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-1">Verified Network</h4>
                <p className="text-gray-300 text-sm">All institutions and suppliers are thoroughly verified</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary mr-4 text-2xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-1">Community Impact</h4>
                <p className="text-gray-300 text-sm">Part of a movement transforming communities</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary mr-4 text-2xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-1">Tax Benefits</h4>
                <p className="text-gray-300 text-sm">Get proper tax deduction certificates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">50K+</div>
              <p className="text-gray-300 text-lg">Active Donors</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">₹25 Cr</div>
              <p className="text-gray-300 text-lg">Donations Tracked</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-gray-300 text-lg">Institutions Helped</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">1M+</div>
              <p className="text-gray-300 text-lg">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-secondary to-yellow-600 p-16 rounded-lg text-center shadow-2xl">
          <h3 className="text-4xl font-bold text-primary mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-primary text-xl mb-10 font-light">
            Join thousands of donors, institutes, and suppliers transforming lives through शक्ति Link
          </p>
          <Button
            onClick={() => navigate('/login')}
            variant="primary"
            className="px-10 py-4 text-lg bg-primary text-secondary hover:bg-gray-100"
          >
            Join Our Movement
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-tertiary bg-primary/50 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="text-lg font-light">© 2024 शक्तिLINK. Empowering communities, one donation at a time.</p>
        </div>
      </div>
    </div>
  );
}
