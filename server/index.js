import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json())

// Connect to DB
mongoose.connect(process.env.DATABASE_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// User Model
const StoreUserScheme = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" }
});
const StoreUser = mongoose.model("StoreUser", StoreUserScheme);

// Product Model
const StoreProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
  description: String,
  imageUrl: String,
});

const Product = mongoose.model("StoreProduct", StoreProductSchema);

// Routes
app.post('/api/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    let user = await StoreUser.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new StoreUser({ username, password: hashedPassword, role });
    await newUser.save();

    res.json({ msg: 'User registered successfully', role: newUser.role });
  } catch (error) {
    res.status(500).send('Server error');
  }
});


// login route
app.post('/api/login',async (req,res)=>{
    const {username,password}=req.body;
    const user = await StoreUser.findOne({username});
    if(!user){
        return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({ msg: 'Invalid Passoword' });
    }
    res.json({msg:"Logged in successfully",user})
})


// Add Product (Admin only)
app.post('/api/products', async (req, res) => {
  const { name, price, type, description, imageUrl } = req.body;
  try {
    const newProduct = new Product({ name, price, type, description, imageUrl });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get All Products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


app.get('/api/single-product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.body;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json({ msg: 'Product deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
