import React from 'react';
import axios from 'axios';
import ProductForm from '../../../layouts/product/productForm';

const CreateProductForm: React.FC = () => {
  const handleSubmit = async (product: any) => {
    console.log("sadguru")
    console.log(product)
    try {
     // const response = await axios.post('http://localhost:4000/category/products', product);
   
    } catch (error:any) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProductForm;