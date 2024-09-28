import { useState } from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { createProduct, deleteProduct, useGetProduct } from '../../store/queries';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { Product } from '../../type';


type FormDataType = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  type: string;
}

type AdminDashboardProps = {
  user: string | null;
};

const AdminDashboard = ({ user }: AdminDashboardProps) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    type: '',
  });

  const navigate = useNavigate();
  const { data: products = [], isLoading, refetch } = useGetProduct();

  if (user && user !== 'admin') {
    navigate('/');
  }

  // Add new product
  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newProduct = { ...formData, price: Number(formData.price) };
      await createProduct(newProduct);
      toast.success('New Product added successfully');
      setFormData({ name: '', description: '', price: '', imageUrl: '', type: '' });
      refetch();
    } catch {
      toast.error('Failed to add new product');
    }
  };

  // Delete a product
  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      toast.success('Product deleted successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to delete product');
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="product-form">
        <h2>Add New Product</h2>
        <form onSubmit={addProduct}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div className="product-table">
        <h2>Product List</h2>
        {isLoading ? (
          <div className="loading-container">
            <ClipLoader color="#000" loading={isLoading} size={80} />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>₹{product.price}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
