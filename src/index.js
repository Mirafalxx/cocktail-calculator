import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './App';
import history from './history';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import theme from './theme';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
