import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

export default function RaiseRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'supplies',
    quantity: '',
    urgency: 'medium',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/institute/signin');
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-tertiary to-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">Raise a Request</h1>
          <p className="text-xl text-gray-300">
            Post your institutional needs and connect with generous donors and suppliers
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="bg-tertiary border-2 border-secondary p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Create Your Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Request Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Medical Equipment for Hospital"
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide detailed information about your request..."
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  >
                    <option value="supplies">Medical Supplies</option>
                    <option value="equipment">Equipment</option>
                    <option value="food">Food & Groceries</option>
                    <option value="education">Educational Materials</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Quantity *</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Number of items"
                    className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Urgency Level *</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                >
                  <option value="low">Low - Can wait</option>
                  <option value="medium">Medium - Needed soon</option>
                  <option value="high">High - Urgent</option>
                  <option value="critical">Critical - Emergency</option>
                </select>
              </div>

              <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                Sign In to Post Request
              </Button>
            </form>
          </Card>

          {/* Info Section */}
          <div className="space-y-6">
            <Card className="bg-tertiary border-2 border-secondary p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">📋 Who Can Raise Requests?</h3>
              <p className="text-gray-300">
                Verified educational institutions, hospitals, NGOs, and charitable organizations can post their requirements and connect with our network of donors and suppliers.
              </p>
            </Card>

            <Card className="bg-tertiary border-2 border-secondary p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">✅ What Happens Next?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-secondary mr-3">1.</span>
                  <span>Your request is reviewed and published</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">2.</span>
                  <span>Donors and suppliers can express interest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">3.</span>
                  <span>You connect directly to finalize details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">4.</span>
                  <span>Track donation/supply delivery in real-time</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-tertiary border-2 border-secondary p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">🛡️ Verification</h3>
              <p className="text-gray-300">
                We verify all institutions to ensure transparency and prevent fraud. Your requests help us build a trusted community.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
