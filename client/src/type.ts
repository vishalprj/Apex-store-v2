export type LoginPayload = {
  username: string;
  password: string;
}

export type SignUpPayload = {
  username: string;
  password: string;
  role: string;
}

export type CreateProductPayload = {
  name: string;
  price: number;
  type: string;
  description:string;
  imageUrl:string
}


export type Product = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}
