import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import RequirementService from '../../services/RequirementService';
import useAuthStore from '../../store/authStore';
import { formatDate } from '../../utils/helpers';

export default function InstituteDashboard() {
  const { user } = useAuthStore();
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    requirement: '',
    quantity: '',
    urgencyLevel: 'MEDIUM',
  });

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const res = await RequirementService.getRequirements();
      setRequirements(res.data?.data || res.data || []);
    } catch (err) {
      setError('Failed to load requirements');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RequirementService.createRequirement({
        ...formData,
        quantity: parseFloat(formData.quantity),
        receivedQuantity: 0,
        instituteId: user?.instituteId,
      });
      setFormData({ requirement: '', quantity: '', urgencyLevel: 'MEDIUM' });
      setShowForm(false);
      await fetchRequirements();
    } catch (err) {
      setError('Failed to create requirement');
    }
  };

  if (loading) return <div className="p-8 text-center text-white">Loading...</div>;

  const totalRequested = requirements.reduce((sum, r) => sum + (r.quantity || 0), 0);
  const totalReceived = requirements.reduce((sum, r) => sum + (r.receivedQuantity || 0), 0);

  return (
    <div className="p-8 bg-primary min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-secondary">
        {user?.instituteName} 🏢
      </h1>

      {error && (
        <div className="bg-danger text-white p-4 rounded mb-4 font-bold">{error}</div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-300 text-sm font-bold">Active Requirements</p>
          <p className="text-3xl font-bold text-secondary mt-2">{requirements.length}</p>
        </Card>
        <Card>
          <p className="text-gray-300 text-sm font-bold">Total Requested</p>
          <p className="text-3xl font-bold text-warning mt-2">{totalRequested}</p>
        </Card>
        <Card>
          <p className="text-gray-300 text-sm font-bold">Total Received</p>
          <p className="text-3xl font-bold text-donor mt-2">{totalReceived}</p>
        </Card>
      </div>

      {/* Add Requirement Button */}
      <div className="mb-8">
        <Button onClick={() => setShowForm(!showForm)} variant="institute">
          {showForm ? 'Cancel' : 'Add New Requirement'}
        </Button>
      </div>

      {/* Add Requirement Form */}
      {showForm && (
        <Card className="mb-8 bg-tertiary">
          <h2 className="text-2xl font-bold mb-4 text-secondary">Add New Requirement</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Requirement"
              type="text"
              value={formData.requirement}
              onChange={(e) =>
                setFormData({ ...formData, requirement: e.target.value })
              }
              required
            />

            <Input
              label="Quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              required
            />

            <div className="mb-4">
              <label className="block text-sm font-bold text-secondary mb-2">
                Urgency Level
              </label>
              <select
                value={formData.urgencyLevel}
                onChange={(e) =>
                  setFormData({ ...formData, urgencyLevel: e.target.value })
                }
                className="w-full px-4 py-3 bg-primary border-2 border-secondary rounded-lg text-white"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>

            <Button type="submit" className="w-full" variant="institute">
              Create Requirement
            </Button>
          </form>
        </Card>
      )}

      {/* Requirements List */}
      <h2 className="text-2xl font-bold mb-4 text-secondary">Your Requirements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((req) => (
          <Card key={req.requirementId}>
            <h3 className="font-bold text-lg text-white mb-2">{req.requirement}</h3>
            <p className="text-gray-300 mb-2">
              Requested: {req.quantity} | Received: {req.receivedQuantity}
            </p>
            <p className={`text-sm font-bold mb-2 ${
              req.urgencyLevel === 'HIGH' ? 'text-danger' :
              req.urgencyLevel === 'MEDIUM' ? 'text-warning' : 'text-donor'
            }`}>
              {req.urgencyLevel} Priority
            </p>
            <p className="text-xs text-gray-400">
              Created: {formatDate(req.createdDate)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
