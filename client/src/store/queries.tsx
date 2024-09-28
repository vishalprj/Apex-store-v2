import axios from "axios";

export const getLogin = async (payload) => {
  try {
    const res = await axios.post("https://amazon-clone-v1.onrender.com/api/login", payload);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const getSignUp = async (payload) => {
  try {
    const res = await axios.post("https://amazon-clone-v1.onrender.com/api/register", payload);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};


export const getProduct = async () => {
  try {
    const res = await axios.get("https://amazon-clone-v1.onrender.com/api/products");
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};


export const getSingleProduct = async (id:string|undefined) => {
  try {
    const res = await axios.get(`https://amazon-clone-v1.onrender.com/api/single-product/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};


export const createProduct = async (payload) => {
  try {
    const res = await axios.post('https://amazon-clone-v1.onrender.com/api/products', payload);
    return res.data;
  } catch (error) {
    console.error("Error during product addition:", error);
    throw error;
  }
};

