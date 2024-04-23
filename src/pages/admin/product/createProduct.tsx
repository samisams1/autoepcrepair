import React from 'react';
import ProductForm from '../../../layouts/product/productForm';
import api from '../../../api';

const CreateProductForm: React.FC = () => {
  const handleSubmit = async (product: any) => {
    console.log("sadguru")
    console.log(product)
    try {
     // const response = await axios.post('http://localhost:4000/category/products', product);
      const response = await api.post('http://localhost:4000/category/products', product, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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