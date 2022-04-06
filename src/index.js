import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user/user';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
     <App /> 
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

