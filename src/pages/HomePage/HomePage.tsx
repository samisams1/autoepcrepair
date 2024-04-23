import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Banner from './Banner';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import SubMenu from './SubMain';

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

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <SubMenu />
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default HomePage;