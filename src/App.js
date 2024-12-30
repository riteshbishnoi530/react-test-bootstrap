import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
