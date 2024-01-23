import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil';
import { Auth0Provider } from '@auth0/auth0-react';

//TIDY THIS UP

const audience = import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE
const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN
const clientId= import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID
const callbackURL = import.meta.env.VITE_REACT_APP_AUTH0_CALLBACK_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Auth0Provider
              domain = {domain}
              clientId= {clientId}
              callbackURL = {callbackURL}
              authorizationParams = {{
                audience: audience,
                redirect_uri: "https://gavel-app.onrender.com/"
              }}
        > 
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </Auth0Provider>
  </React.StrictMode>
)
