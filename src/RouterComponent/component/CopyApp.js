
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import MainHeader from './component/MainHeader';
import Home from './component/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainHeader />}>
      <Route index element={<Home />} />
      <Route path='/login' element={<div><Login /></div>} />
      <Route path='/about' element={<div><About /></div>} />
      <Route path='/contact' element={<div><Contact /></div>} />
      <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
