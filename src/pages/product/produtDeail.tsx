import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import Item from '../ItemPage/Item';
import { useLocation } from 'react-router-dom';

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
export interface Category {
  id: number;
  name: string;
}
export interface ItemPageProps {
  categories?: Category;
}

const ProductPage: React.FC<ItemPageProps> = ({ categories }) => {
  const location = useLocation();
  const { state: product } = location;
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
        <Item product = {product}/>
        dddddddddd
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default ProductPage;
