import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import SearchComponent from '../../layouts/Search/Search';
import SidebarComponent from '../../layouts/Sidebar';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import axios from 'axios';
import ProductForm from '../../layouts/product/productForm';
// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

const CreateProduct = () => {
    const handleSubmit = async (category: any) => {
        try {
          const response = await axios.post('http://localhost:4000/product/create', category);
          console.log(response.data);
        } catch (error:any) {
          console.error(error.response.data);
        }
      };
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <ProductForm onSubmit={handleSubmit} />
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default CreateProduct;
