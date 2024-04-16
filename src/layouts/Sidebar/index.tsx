import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

const Sidebar = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 200px;
  padding: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

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

interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  subcategories: Subcategory[];
}

const SidebarComponent: React.FC = () => {
  const [showSubMenus, setShowSubMenus] = useState<boolean[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response: AxiosResponse<Category[]> = await axios.get<Category[]>('http://localhost:4000/category');
      const formattedCategories: Category[] = response.data.map((category) => ({
        ...category,
        subcategories: category.subcategories.map((subcategory) => ({
          ...subcategory,
        })),
      }));
      setCategories(formattedCategories);
      setShowSubMenus(new Array(formattedCategories.length).fill(false));
      console.log(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubMenuClick = (index: number) => {
    setShowSubMenus((prevSubMenus) => {
      const newSubMenus = [...prevSubMenus];
      newSubMenus[index] = !newSubMenus[index];
      return newSubMenus;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Sidebar>
        <CategoryTitle>Category</CategoryTitle>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <MenuItem>
              <ArrowIconWrapper>
                <ArrowIcon
                  rotate={showSubMenus[index]}
                  onClick={() => handleSubMenuClick(index)}
                >
                  &#9658;
                </ArrowIcon>
              </ArrowIconWrapper>
              <MenuLink to={`/${category.name.toLowerCase().replace(' ', '-')}`}>
                {category.name}
              </MenuLink>
            </MenuItem>
            {showSubMenus[index] && (
              <SubMenu>
                {category.subcategories.map((submenu, subIndex) => (
                  <MenuItem key={subIndex}>
                    <MenuLink
                      to={`/${category.name.toLowerCase().replace(' ', '-')}/submenu${
                        subIndex + 1
                      }`}
                    >
                      {submenu.name}
                    </MenuLink>
                  </MenuItem>
                ))}
              </SubMenu>
            )}
          </React.Fragment>
        ))}
      </Sidebar>
    </ThemeProvider>
  );
};

export default SidebarComponent;