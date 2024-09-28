import axios from "axios";
import { useQuery } from "react-query";
import { CreateProductPayload, LoginPayload, SignUpPayload } from "../type";

const API_URL = "https://amazon-clone-v1.onrender.com/api";


export const getLogin = async (payload: LoginPayload) => {
  try {
    const res = await axios.post(`${API_URL}/login`, payload);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const getSignUp = async (payload: SignUpPayload) => {
  try {
    const res = await axios.post(`${API_URL}/register`, payload);
    return res.data;
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

export const getProduct = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const useGetProduct = () => {
  return useQuery("product", getProduct);
};

export const getSingleProduct = async (id: string | undefined) => {
  try {
    const res = await axios.get(`${API_URL}/single-product/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
  }
};

export const createProduct = async (payload: CreateProductPayload) => {
  try {
    const res = await axios.post(`${API_URL}/products`, payload);
    return res.data;
  } catch (error) {
    console.error("Error during product addition:", error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const res = await axios.delete(`${API_URL}/products/delete`, {
      data: { id },
    });
    return res.data;
  } catch (error) {
    console.error("Error during product deletion:", error);
  }
};
