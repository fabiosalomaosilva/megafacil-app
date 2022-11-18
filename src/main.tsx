import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRoutes from './routes'
import { store } from './store'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <AppRoutes />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
)
