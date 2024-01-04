import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Auth0Provider
               domain = {import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
               clientId= {import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
               callbackURL = {import.meta.env.VITE_REACT_APP_AUTH0_CALLBACK_URL}
              authorizationParams={{
                redirect_uri: "http://localhost:5173"
              }}
        >
          <RecoilRoot>
          <App />
          </RecoilRoot>
        </Auth0Provider>
  </React.StrictMode>
)
