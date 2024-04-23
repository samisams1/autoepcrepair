import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import RegistrationForm from '../../layouts/register/registerForm';
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

const Register = () => {
    const handleSubmit = async (category: any) => {
      console.log(category)
        try {
          const response = await api.post('/users/create', category);
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
          <RegistrationForm onSubmit={handleSubmit} />

        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default Register;
