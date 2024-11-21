import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Openfort from '@openfort/openfort-js';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Authenticate from './components/Authenticate.tsx';

export const openfortInstance = new Openfort({
  baseConfiguration: {
    publishableKey: import.meta.env.VITE_API_OPENFORT_PUBLISHABLE_KEY!,
  },
  shieldConfiguration: {
    shieldPublishableKey: import.meta.env.VITE_API_SHIELD_PUBLISHABLE_KEY!,
    shieldEncryptionKey: import.meta.env.VITE_API_SHIELD_ENCRYPTION_PART!,
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/authentication',
    element: <Authenticate openfortInstance={openfortInstance} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
