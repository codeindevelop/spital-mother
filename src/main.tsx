import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/components/keenicons/assets/styles.css';
import '@/assets/scss/typography/_english-fonts.scss';
import '@/assets/scss/typography/_persian-fonts.scss';
import '@/assets/css/globals.css';

import { App } from './App';

import { ProvidersWrapper } from './providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>
);
