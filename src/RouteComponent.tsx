import React, { useEffect, useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegisterPage';
import ItemPage from './pages/ItemPage/ItemPage';

interface Category {
  id: number;
  name: string;
}

const RouteComponent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:4000/category');
      const data = await response.json();
      setCategories(data.map((category: Category) => ({ id: category.id, name: category.name })));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const generateCategoryRoutes = () => {
    return categories.map((category) => {
      const categoryName = category.name.toLowerCase().replace(/\s+/g, '-');

      return {
        path: `/${categoryName}`,
        element: <ItemPage categoryId={category.id} />,
      };
    });
  };

  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/signin',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    ...generateCategoryRoutes(),
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  console.log('Generated Routes:', routes); // Log the generated routes

  return routes || <Navigate to="/404" />;
};

export default RouteComponent;