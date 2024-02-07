import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
       <GlobalStyle />
       <App />
     </ThemeProvider>
    </BrowserRouter>
  </div>
);
