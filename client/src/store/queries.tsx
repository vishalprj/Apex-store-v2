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
    const res = await axios.post("http://localhost:5001/api/register", payload);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
