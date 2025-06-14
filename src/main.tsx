import '@/assets/keenicons/assets/styles.css';
import './assets/css/globals.css';

import './assets/scss/typography/_persian-fonts.scss';
import './assets/scss/typography/_english-fonts.scss';
import './assets/scss/styles.scss';

import axios from 'axios';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import { ProvidersWrapper } from './providers';
import React from 'react';
import { setupAxios } from './modules/auth/providers/_helpers';

/**
 * Inject interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>
);
