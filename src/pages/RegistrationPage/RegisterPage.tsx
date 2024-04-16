import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import Cabinet from '../../layouts/LeftSide/Cabinet';
import ImportantInfo from '../../layouts/LeftSide/importnamtInfo';
import RegisterForm from './RegisterForm';

// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

const Content = styled.div`
  flex: 1;
  display: flex;
`;
const SubMainWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
`;
const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;
const LeftColumn = styled.div`
  flex: 0.8;
  background-color: #ffffff;
  overflow-x: auto;
`;

const RightColumn = styled.div`
  flex: 0.2;
`;

const RegisterPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <SubMainWrapper>
          <LeftColumn>
      <RegisterForm/>
      </LeftColumn>
      <RightColumn>
        <Cabinet/>
        <ImportantInfo/>
      </RightColumn>
      </SubMainWrapper>
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default RegisterPage;