// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouteComponent from './RouteComponent';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
   <Provider store={store}>
      <div className="App">
      <Router>
      <RouteComponent />
    </Router>
      </div>
    </Provider>
  );
};

export default App;