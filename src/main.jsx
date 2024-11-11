import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import Store from './redux/Store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
  </StrictMode>,
)
