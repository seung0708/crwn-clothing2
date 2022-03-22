import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './routes/home/homepage-component';
import './categories.styles.scss'
import { render } from 'react-dom';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/sign-in/signin';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Route>
      
  </Routes>
  )
}

export default App;
