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
  image: String,
});

const Product = mongoose.model("StoreProduct", StoreProductSchema);

// Authentication Middleware
const authMiddleware = async (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    return res.status(401).json({ msg: 'Authentication required' });
  }
  try {
    const user = await StoreUser.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

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
app.post('/api/products', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied' });
  }

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

// app.get('/api/products/search', async (req, res) => {
//   const { name, minPrice, maxPrice, type } = req.query;
//   let query = {};

//   if (name) query.name = new RegExp(name, 'i');
//   if (type) query.type = type;
//   if (minPrice || maxPrice) {
//     query.price = {};
//     if (minPrice) query.price.$gte = minPrice;
//     if (maxPrice) query.price.$lte = maxPrice;
//   }

//   try {
//     const products = await Product.find(query);
//     res.json(products);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
