import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../../../layouts/Footer/footer';
import { PageHeaderComponent } from '../../../layouts/PageHeader';
import SidebarComponent from '../../../layouts/Sidebar';
import SearchComponent from '../../../layouts/Search/Search';
import Banner from '../../HomePage/Banner';
import axios from 'axios';
import SubCategoryForm from '../../../layouts/subCategory/subCategoryForm';
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

const CreateSubCategory = () => {
    const handleSubmit = async (category: any) => {
        try {
          const response = await axios.post('http://localhost:4000/subCategory/create', category);
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
          <SubCategoryForm onSubmit={handleSubmit} />
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default CreateSubCategory;
