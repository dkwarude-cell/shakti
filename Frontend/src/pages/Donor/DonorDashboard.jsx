import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import RequirementService from '../../services/RequirementService';
import DonationService from '../../services/DonationService';
import useAuthStore from '../../store/authStore';
import { formatDate } from '../../utils/helpers';

export default function DonorDashboard() {
  const { user } = useAuthStore();
  const [requirements, setRequirements] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [reqRes, donRes] = await Promise.all([
        RequirementService.getRequirements(),
        DonationService.getUserDonations(),
      ]);
      setRequirements(reqRes.data?.data || reqRes.data || []);
      setDonations(donRes.data?.data || donRes.data || []);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleDonation = async (requirement) => {
    if (!donationAmount) return;
    try {
      await DonationService.createDonation({
        requirementId: requirement.requirementId,
        amount: parseFloat(donationAmount),
        donorId: user?.donorId,
      });
      setDonationAmount('');
      setSelectedRequirement(null);
      await fetchData();
    } catch (err) {
      setError('Failed to create donation');
    }
  };

  if (loading) return <div className="p-8 text-center text-white">Loading...</div>;

  return (
    <div className="p-8 bg-primary min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-secondary">
        Welcome, {user?.fullName}! 👋
      </h1>

      {error && (
        <div className="bg-danger text-white p-4 rounded mb-4 font-bold">{error}</div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-300 text-sm font-bold">Total Donations</p>
          <p className="text-3xl font-bold text-secondary mt-2">{donations.length}</p>
        </Card>
        <Card>
          <p className="text-gray-300 text-sm font-bold">Active Requirements</p>
          <p className="text-3xl font-bold text-donor mt-2">{requirements.length}</p>
        </Card>
        <Card>
          <p className="text-gray-300 text-sm font-bold">Total Donated</p>
          <p className="text-3xl font-bold text-institute mt-2">
            ₹{donations.reduce((sum, d) => sum + (d.amount || 0), 0)}
          </p>
        </Card>
      </div>

      {/* Requirements */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Available Requirements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirements.map((req) => (
            <Card key={req.requirementId}>
              <h3 className="font-bold text-lg text-white mb-2">{req.requirement}</h3>
              <p className="text-gray-300 mb-2">
                Quantity: {req.quantity} | Received: {req.receivedQuantity}
              </p>
              <p className={`text-sm font-bold mb-4 ${
                req.urgencyLevel === 'HIGH' ? 'text-danger' :
                req.urgencyLevel === 'MEDIUM' ? 'text-warning' : 'text-success'
              }`}>
                {req.urgencyLevel} Priority
              </p>
              <Button
                onClick={() => setSelectedRequirement(req)}
                variant="donor"
                className="w-full"
              >
                Donate Now
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Your Donations */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-secondary">Your Donations</h2>
        {donations.length > 0 ? (
          <div className="space-y-2">
            {donations.map((donation, idx) => (
              <Card key={idx} className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-secondary">₹{donation.amount}</p>
                  <p className="text-sm text-gray-400">
                    {formatDate(donation.donationDate)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <p className="text-gray-300">No donations yet. Start helping today!</p>
          </Card>
        )}
      </div>

      {/* Donation Modal */}
      {selectedRequirement && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-tertiary">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              Donate to: {selectedRequirement.requirement}
            </h3>
            <input
              type="number"
              placeholder="Donation Amount in ₹"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full px-4 py-2 bg-primary border-2 border-secondary rounded-lg text-white mb-4"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => handleDonation(selectedRequirement)}
                variant="donor"
                className="flex-1"
              >
                Confirm Donation
              </Button>
              <Button
                onClick={() => setSelectedRequirement(null)}
                variant="outline-donor"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
