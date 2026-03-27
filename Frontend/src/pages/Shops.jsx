import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Shops() {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      name: 'Medical Supplies Kit',
      category: 'Medical',
      price: '₹450',
      supplier: 'HealthCare Plus',
      rating: 4.8,
      icon: '💊',
    },
    {
      name: 'Educational Books Bundle',
      category: 'Education',
      price: '₹800',
      supplier: 'Knowledge Hub',
      rating: 4.9,
      icon: '📚',
    },
    {
      name: 'Food Supply Package',
      category: 'Food',
      price: '₹1,200',
      supplier: 'Good Food Co.',
      rating: 4.7,
      icon: '🍳',
    },
    {
      name: 'Computer Equipment',
      category: 'Technology',
      price: '₹15,000',
      supplier: 'Tech Solutions',
      rating: 4.9,
      icon: '💻',
    },
    {
      name: 'Clothing & Textiles',
      category: 'Clothing',
      price: '₹500',
      supplier: 'Fashion Forward',
      rating: 4.6,
      icon: '👕',
    },
    {
      name: 'Sports Equipment',
      category: 'Sports',
      price: '₹2,000',
      supplier: 'Active Life',
      rating: 4.8,
      icon: '⚽',
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-tertiary to-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">शक्ति Link Shops</h1>
          <p className="text-xl text-gray-300">
            Verified suppliers offering quality products for institutions and communities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {['All', 'Medical', 'Education', 'Food', 'Technology', 'Clothing', 'Sports'].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded font-bold transition ${
                cat === 'All'
                  ? 'bg-secondary text-primary'
                  : 'bg-tertiary text-white border border-secondary hover:bg-secondary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="bg-tertiary border-2 border-secondary p-6 hover:shadow-lg transition">
              <div className="text-6xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{product.category}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">{product.rating}</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">by {product.supplier}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-secondary">{product.price}</span>
                <Button
                  onClick={() => navigate('/auth/institute/signin')}
                  variant="primary"
                  className="px-4 py-2 text-sm"
                >
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Buy From Suppliers */}
        <div className="bg-tertiary border-l-4 border-secondary p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">Why Buy From Our Suppliers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-2">Verified Suppliers</h4>
                <p className="text-gray-300">All suppliers are thoroughly vetted and verified for quality and reliability</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-2">Fair Pricing</h4>
                <p className="text-gray-300">Competitive prices with bulk discounts available for institutions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-2">Quality Assurance</h4>
                <p className="text-gray-300">Every product meets our strict quality standards</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-secondary text-3xl mr-4 flex-shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-white mb-2">Fast Delivery</h4>
                <p className="text-gray-300">Quick and reliable shipping to your institution</p>
              </div>
            </div>
          </div>
        </div>

        {/* For Suppliers */}
        <Card className="bg-gradient-to-r from-secondary to-yellow-600 p-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Are You a Supplier?</h2>
          <p className="text-primary text-lg mb-6">
            Join our network and reach thousands of institutions and donors looking for quality products
          </p>
          <Button
            onClick={() => navigate('/auth/supplier/signin')}
            variant="primary"
            className="px-8 py-3 text-lg bg-primary text-secondary hover:bg-gray-100"
          >
            Register as Supplier
          </Button>
        </Card>
      </div>
    </div>
  );
}
