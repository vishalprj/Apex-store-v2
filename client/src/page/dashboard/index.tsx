import  { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { createProduct, getProduct } from '../../store/queries';
import toast from 'react-hot-toast';


type AdminDashboardProps = {
    user: string;
}

const AdminDashboard = ({ user }:AdminDashboardProps) => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    type:''
  });
  const navigate = useNavigate();

  console.log("🚀 ~ AdminDashboard ~ formData:", formData)

 useEffect(() => {
  if (user && user !== 'admin') {
    navigate('/');
  }
}, [user, navigate]);


  useEffect(() => {
    const fetchData = async () => {
    const res = await getProduct()
    setProducts(res)
    }
    fetchData()
  }, []);

   const addProduct = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await createProduct(formData); // Call the
      toast.success("New Product added successfully");
      setFormData({ title: '', description: '', price: '', imageUrl: '', type: '' });
    } catch  {
      toast.error("Failed to add new product");
    }
  };


  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://amazon-clone-v1.onrender.com/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add Product Form */}
      <div className="product-form">
        <h2>Add New Product</h2>
        <form onSubmit={addProduct}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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

      {/* Product List Table */}
      <div className="product-table">
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>₹{product.price}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteProduct(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
