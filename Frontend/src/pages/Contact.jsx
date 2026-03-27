import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    {
      icon: '📧',
      title: 'Email',
      content: 'support@shakt ilink.in',
      subtext: 'hello@shaktilink.in',
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+91 9876 543 210',
      subtext: 'Available 24/7',
    },
    {
      icon: '📍',
      title: 'Office',
      content: 'New Delhi, India',
      subtext: 'Tech Hub, Innovation District',
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      content: 'Mon - Fri: 9 AM - 6 PM',
      subtext: 'IST (GMT +5:30)',
    },
  ];

  const faqs = [
    {
      q: 'How do I donate?',
      a: 'Simply create a donor account, browse active requests from institutions, and make a donation. You can track your donation in real-time on your dashboard.',
    },
    {
      q: 'Is my personal information safe?',
      a: 'Yes, we use industry-standard encryption and security protocols. Your personal information is never shared with third parties without your consent.',
    },
    {
      q: 'Can I get a tax receipt for my donation?',
      a: 'Yes, all donations are eligible for tax deduction. We provide proper tax receipts and certificates automatically.',
    },
    {
      q: 'How are institutions verified?',
      a: 'We manually verify all institutions through government records, registration documents, and third-party checks before they can post requests.',
    },
    {
      q: 'What if I have a dispute?',
      a: 'Our dedicated support team is available to help resolve any disputes. We have a transparent grievance redressal process.',
    },
    {
      q: 'Can I see the impact of my donation?',
      a: 'Yes, you can track your donation and receive detailed impact reports with photos and testimonials from beneficiaries.',
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-tertiary to-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            We're here to help. Reach out with any questions or feedback.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="bg-tertiary border-2 border-secondary p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-secondary focus:outline-none"
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <Card key={index} className="bg-tertiary border-2 border-secondary p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{detail.icon}</span>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-2">{detail.title}</h3>
                    <p className="text-white font-semibold">{detail.content}</p>
                    <p className="text-gray-400 text-sm">{detail.subtext}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-tertiary border-2 border-secondary p-8 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-4xl hover:text-secondary transition">👥</a>
            <a href="#" className="text-4xl hover:text-secondary transition">🐦</a>
            <a href="#" className="text-4xl hover:text-secondary transition">📸</a>
            <a href="#" className="text-4xl hover:text-secondary transition">▶️</a>
            <a href="#" className="text-4xl hover:text-secondary transition">💼</a>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-4xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-tertiary border-2 border-secondary p-6">
                <h3 className="font-bold text-secondary mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
