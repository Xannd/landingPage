import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';

import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Main/>
  </React.StrictMode>
);


