// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouteComponent from './RouteComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './redux/context/CartContext';
import UserProvider from './redux/context/UserContext';

const App: React.FC = () => {
  return (
   <Provider store={store}>
    <UserProvider>
    <CartProvider>
      <div className="App">
      <Router>
      <RouteComponent />
    </Router>
      </div>
      </CartProvider>
      </UserProvider>
    </Provider>

  );
};

export default App;