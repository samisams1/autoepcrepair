import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import SearchComponent from '../../layouts/Search/Search';
import SidebarComponent from '../../layouts/Sidebar';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import ProductForm from '../../layouts/product/productForm';
import api from '../../api';
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
          const response = await api.post('/product/create', category, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
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
