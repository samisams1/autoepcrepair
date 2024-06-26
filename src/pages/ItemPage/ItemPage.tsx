import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import Item from './Item';
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

export interface Product {
  id: string;
  name: string;
  decription: string;
  language: string;
  region: string;
  date: string;
  price: number;
  imageurl:string;
}
const ItemPage: React.FC<ItemPageProps> = ({ categories }) => {
  const location = useLocation();
  const product = location.state as Product;
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
        <Item product = {product}/>
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default ItemPage;

