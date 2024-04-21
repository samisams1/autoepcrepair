// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouteComponent from './RouteComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './redux/context/CartContext';

const App: React.FC = () => {
  return (
   <Provider store={store}>
    <CartProvider>
      <div className="App">
      <Router>
      <RouteComponent />
    </Router>
      </div>
      </CartProvider>
    </Provider>
  );
};

export default App;