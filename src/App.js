import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <LoginPage/> }/>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
