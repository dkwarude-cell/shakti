import Card from '../components/Card';

export default function Reviews() {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      role: 'Hospital Administrator',
      image: '🏥',
      rating: 5,
      text: 'शक्ति Link has completely transformed how we receive donations. The transparency and tracking system has made our donors trust us more.',
      verified: true,
    },
    {
      name: 'Priya Singh',
      role: 'School Principal',
      image: '🎓',
      rating: 5,
      text: 'We were able to get educational supplies faster than ever before. Our students are now better equipped for learning.',
      verified: true,
    },
    {
      name: 'Amit Patel',
      role: 'Donor',
      image: '💝',
      rating: 5,
      text: 'I love seeing exactly where my donations go. The impact reports are incredibly detailed and inspiring.',
      verified: true,
    },
    {
      name: 'Sneha Verma',
      role: 'NGO Director',
      image: '🤝',
      rating: 4,
      text: 'Great platform for connecting with donors. The support team is always helpful and responsive.',
      verified: true,
    },
    {
      name: 'Vikram Shah',
      role: 'Supplier',
      image: '🏭',
      rating: 5,
      text: 'As a supplier, this platform has opened new opportunities for us to contribute to society while growing our business.',
      verified: true,
    },
    {
      name: 'Anjali Desai',
      role: 'Community Member',
      image: '👥',
      rating: 5,
      text: 'The entire community has benefited from शक्ति Link. It makes giving easy, transparent, and impactful.',
      verified: true,
    },
  ];

  const statistics = [
    { label: 'Happy Users', value: '50K+' },
    { label: 'Successful Donations', value: '100K+' },
    { label: 'Active Institutions', value: '500+' },
    { label: 'Lives Impacted', value: '1M+' },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-tertiary to-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">What People Say About Us</h1>
          <p className="text-xl text-gray-300">
            Read genuine reviews from donors, institutions, and suppliers
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="bg-tertiary border-2 border-secondary p-8 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
              <p className="text-gray-300">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-tertiary border-2 border-secondary p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{review.image}</div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
              
              <div className="border-t border-secondary pt-4">
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.role}</p>
                {review.verified && (
                  <span className="inline-block mt-2 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                    ✓ Verified User
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonial Highlight */}
        <div className="mt-16 bg-gradient-to-r from-secondary/10 to-secondary/5 p-12 rounded-lg border border-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              "शक्ति Link has made charitable giving meaningful and transparent"
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              — A Network of Thousands of Happy Users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
