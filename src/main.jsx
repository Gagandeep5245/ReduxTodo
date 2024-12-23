import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importing the Provider component from React-Redux to provide the Redux store to the app
import { Provider } from 'react-redux'
// Importing the Redux store
import {store} from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    
  </StrictMode>,
)
