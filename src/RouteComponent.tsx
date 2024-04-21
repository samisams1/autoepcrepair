import React, { useEffect, useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ItemPage from './pages/ItemPage/ItemPage';
import ProductPage from './pages/product/ProductPage';
import CreateCategory from './pages/admin/category/createCategory';
import CreateSubCategory from './pages/admin/subCategory/createSubCategory';
import CreateProduct from './pages/product/createProduct';
import Orders from './pages/order/orders';
import CreateOrder from './pages/order/createOrder';
import Register from './pages/registration/register';
import Login from './pages/login/login';
import Carts from './pages/CategoryPage/carts';
import Order from './pages/order/order';
import Categories from './pages/CategoryPage/category';
import SubCategory from './pages/admin/subCategory/subCategory';
import Product from './pages/admin/product/product';
import Users from './pages/user/user';

interface ProductInterface {
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

interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  products: ProductInterface[];
}

export interface Category {
  id:number;
  subcategoryName:string;
  name: string;
  subcategories: Subcategory[];
}


const RouteComponent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  //const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:4000/category');
      const data = await response.json();
      const populatedCategories = data.map((category: Category) => ({
        id: category.id,
        name: category.name,
        subcategories: category.subcategories || [], // Ensure subcategories array exists
      }));
      setCategories(populatedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  const generateCategoryRoutes = (): any[] => {
    return categories.map((category) => {
      const categoryName = category.name.toLowerCase().replace(/\s+/g, '-');
  
      // Extract products from subcategories and combine into a single array
      const categoryProducts = category.subcategories.reduce(
        (allProducts: ProductInterface[], subcategory: Subcategory) => [...allProducts, ...subcategory.products],
        []
      );
  
      return {
        path: `/${categoryName}`,
        element: (
          <ProductPage
            categories={category}
            subcategoryName={''} // Assuming only one selected subcategory
            products={categoryProducts}
          />
        ),
        children: category.subcategories.map((subcategory) => {
          const subcategoryPath = `/${categoryName}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`;
          return {
            path: subcategoryPath,
            element: (
              <ProductPage
                categories={category}
                subcategoryName={subcategory.name}
                products={subcategory.products}
                subcategory={subcategory} // Pass the subcategory as a prop
              />
            ),
          };
        }),
      };
    });
  };
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path:"/productDetail/:id",
      element: <ItemPage />,
    },
    {
      path: '/cart',
      element: <Carts />,
    },
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/createCategory',
      element: <CreateCategory />,
    },
    {
      path: '/category',
      element: <Categories />,
    },
    {
      path: '/subcategory',
      element: <SubCategory />,
    },
    {
      path: '/createSubCategory',
      element: <CreateSubCategory />,
    },
    {
      path: '/createProduct',
      element: <CreateProduct />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/createOrder',
      element: <CreateOrder />,
    },
    {
      path: '/order/:id',
      element: <Order />,
    },
    {
      path: '/orders',
      element: <Orders />,
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