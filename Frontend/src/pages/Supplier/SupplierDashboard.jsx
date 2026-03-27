import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SupplierProductService from '../../services/SupplierProductService';
import useAuthStore from '../../store/authStore';
import { formatDate } from '../../utils/helpers';

export default function SupplierDashboard() {
  const { user } = useAuthStore();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await SupplierProductService.getProducts();
      setProducts(res.data?.data || res.data || []);
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity),
        supplierId: user?.supplierId,
      };

      if (editingId) {
        await SupplierProductService.updateProduct(editingId, productData);
      } else {
        await SupplierProductService.createProduct(productData);
      }

      setFormData({ productName: '', description: '', price: '', quantity: '' });
      setShowForm(false);
      setEditingId(null);
      await fetchProducts();
    } catch (err) {
      setError('Failed to save product');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await SupplierProductService.deleteProduct(id);
        await fetchProducts();
      } catch (err) {
        setError('Failed to delete product');
      }
    }
  };

  const handleEdit = (product) => {
    setFormData({
      productName: product.productName,
      description: product.description,
      price: product.price.toString(),
      quantity: product.quantity.toString(),
    });
    setEditingId(product.supplierProductId);
    setShowForm(true);
  };

  if (loading) return <div className="p-8 text-center text-white">Loading...</div>;

  const totalValue = products.reduce(
    (sum, p) => sum + (p.price * p.quantity),
    0
  );

  return (
    <div className="p-8 bg-primary min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-secondary">
        {user?.companyName} 🏭
      </h1>

      {error && (
        <div className="bg-danger text-white p-4 rounded mb-4 font-bold">{error}</div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-300 text-sm font-bold">Total Products</p>
          <p className="text-3xl font-bold text-secondary mt-2">{products.length}</p>
        </Card>
        <Card>
          <p className="text-gray-300 text-sm font-bold">Total Inventory</p>
          <p className="text-3xl font-bold text-warning mt-2">
            {products.reduce((sum, p) => sum + p.quantity, 0)}
          </p>
        </Card>
        <Card>
          <p className="text-gray-300 text-sm font-bold">Inventory Value</p>
          <p className="text-3xl font-bold text-donor mt-2">₹{totalValue}</p>
        </Card>
      </div>

      {/* Add Product Button */}
      <div className="mb-8">
        <Button
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) {
              setFormData({
                productName: '',
                description: '',
                price: '',
                quantity: '',
              });
              setEditingId(null);
            }
          }}
          variant="supplier"
        >
          {showForm ? 'Cancel' : 'Add New Product'}
        </Button>
      </div>

      {/* Add/Edit Product Form */}
      {showForm && (
        <Card className="mb-8 bg-tertiary">
          <h2 className="text-2xl font-bold mb-4 text-secondary">
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Product Name"
              type="text"
              value={formData.productName}
              onChange={(e) =>
                setFormData({ ...formData, productName: e.target.value })
              }
              required
            />

            <div className="mb-4">
              <label className="block text-sm font-bold text-secondary mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 bg-primary border-2 border-secondary rounded-lg text-white"
                rows="3"
                required
              />
            </div>

            <Input
              label="Price (₹)"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
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

            <Button type="submit" className="w-full" variant="supplier">
              {editingId ? 'Update Product' : 'Add Product'}
            </Button>
          </form>
        </Card>
      )}

      {/* Products List */}
      <h2 className="text-2xl font-bold mb-4 text-secondary">Your Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Card key={product.supplierProductId}>
            <h3 className="font-bold text-lg text-white mb-2">{product.productName}</h3>
            <p className="text-gray-300 mb-2">{product.description}</p>
            <p className="text-sm mb-2 text-secondary font-bold">
              Price: ₹{product.price}
            </p>
            <p className="text-sm mb-4 text-gray-300">
              In Stock: {product.quantity} units
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => handleEdit(product)}
                variant="supplier"
                className="flex-1"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(product.supplierProductId)}
                variant="danger"
                className="flex-1"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
