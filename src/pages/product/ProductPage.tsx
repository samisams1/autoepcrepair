import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import Product from './products';
import { useLocation } from 'react-router-dom';

// Define the theme colors
export const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

export interface Category {
  id: number;
  name: string;
}

export interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  products: ProductInt[];
}

export interface ItemPageProps {
  categories: Category;
  subcategoryName?: string;
  products: ProductInt[];
  subcategory?: Subcategory; // Optional subcategory prop
}

export interface ProductInt {
  id: number;
  name: string;
  type: string | null;
  language: string | null;
  region: string | null;
  date: string | null;
  price: number | null;
  subcategoryId: number;
  createdAt: string;
  updatedAt: string;
}

const ProductPage: React.FC<ItemPageProps> = ({ categories, subcategoryName, products, subcategory }) => {
  const location = useLocation();
  const { pathname } = location; // Get the pathname from the location object
console.log("sadgur")

  const segments = pathname.split('/').filter(segment => segment !== '');
  const category = segments[0];
  const subcategoryNameUrl = segments[1];
  console.log(category)
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Content>
        <SidebarComponent />
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <Product subcategoryNameUrl ={subcategoryNameUrl} category = {category}/>
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default ProductPage;