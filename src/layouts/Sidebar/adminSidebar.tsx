import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const CategoryTitle = styled.div`
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 8px;
  font-size: 16px;
  padding-top: 10px;
`;

const MenuLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span<{ rotate: boolean }>`
  margin-left: 4px;
  transform: ${(props) => (props.rotate ? 'rotate(-90deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;

const ArrowIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const SubMenu = styled.div`
  margin-left: 16px;
`;

const AdminSidebarComponent: React.FC = () => {
  const [showSubMenus, setShowSubMenus] = useState({
    user: false,
    category: false,
    cart: false,
    order: false,
    product:false,
    subCategory:false,
  });

  const handleSubMenuClick = (key: keyof typeof showSubMenus) => {
    setShowSubMenus((prevSubMenus) => {
      return { ...prevSubMenus, [key]: !prevSubMenus[key] };
    });
  };
  return (
    <ThemeProvider theme={theme}>
  
        <CategoryTitle>Menu</CategoryTitle>
        <MenuItem>
          <ArrowIconWrapper>
            <ArrowIcon rotate={showSubMenus.user} onClick={() => handleSubMenuClick('user')}>
              &#9658;
            </ArrowIcon>
          </ArrowIconWrapper>
          <MenuLink to="/user">Users</MenuLink>
        </MenuItem>
        <MenuItem>
          <ArrowIconWrapper>
            <ArrowIcon rotate={showSubMenus.category} onClick={() => handleSubMenuClick('category')}>
              &#9658;
            </ArrowIcon>
          </ArrowIconWrapper>
          <MenuLink to="#">Category</MenuLink>
          <SubMenu style={{ display: showSubMenus.category ? 'block' : 'none' }}>
            <MenuItem>
              <MenuLink to="/createCategory">create</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/category">view</MenuLink>
            </MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <ArrowIconWrapper>
            <ArrowIcon rotate={showSubMenus.subCategory} onClick={() => handleSubMenuClick('subCategory')}>
              &#9658;
            </ArrowIcon>
          </ArrowIconWrapper>
          <MenuLink to="#">Sub Category</MenuLink>
          <SubMenu style={{ display: showSubMenus.subCategory ? 'block' : 'none' }}>
            <MenuItem>
              <MenuLink to="/createSubCategory">create</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/subcategory">view</MenuLink>
            </MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <ArrowIconWrapper>
            <ArrowIcon rotate={showSubMenus.product} onClick={() => handleSubMenuClick('product')}>
              &#9658;
            </ArrowIcon>
          </ArrowIconWrapper>
          <MenuLink to="/product">Product</MenuLink>
          <SubMenu style={{ display: showSubMenus.product ? 'block' : 'none' }}>
            <MenuItem>
              <MenuLink to="/createProduct">create</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/product">view</MenuLink>
            </MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <ArrowIconWrapper>
            <ArrowIcon rotate={showSubMenus.category} onClick={() => handleSubMenuClick('order')}>
              &#9658;
            </ArrowIcon>
          </ArrowIconWrapper>
          <MenuLink to="/order">Order</MenuLink>
          <SubMenu style={{ display: showSubMenus.order ? 'block' : 'none' }}>
            <MenuItem>
              <MenuLink to="/order">view</MenuLink>
            </MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <ArrowIconWrapper>
            <ArrowIcon rotate={showSubMenus.cart} onClick={() => handleSubMenuClick('cart')}>
              &#9658;
            </ArrowIcon>
          </ArrowIconWrapper>
          <MenuLink to="/cart">Cart</MenuLink>
        </MenuItem>
    </ThemeProvider>
  );
};

export default AdminSidebarComponent;
