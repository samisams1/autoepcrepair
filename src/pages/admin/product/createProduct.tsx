import React from 'react';
import axios from 'axios';
import ProductForm from '../../../layouts/product/productForm';

const CreateProductForm: React.FC = () => {
  const handleSubmit = async (product: any) => {
    try {
      const response = await axios.post('http://localhost:4000/category/products', product);
      console.log(response.data);
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