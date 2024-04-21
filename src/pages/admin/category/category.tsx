import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../../../layouts/Footer/footer';
import { PageHeaderComponent } from '../../../layouts/PageHeader';
import Banner from '../../HomePage/Banner';
import SearchComponent from '../../../layouts/Search/Search';
import SidebarComponent from '../../../layouts/Sidebar';
import { Category } from '../../../RouteComponent';

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

const Categories: React.FC<ItemPageProps> = () => {
 
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Content>
        <SidebarComponent />
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          samisasm
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default Categories