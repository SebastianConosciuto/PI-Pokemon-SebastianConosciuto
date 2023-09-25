import './App.css';
import DetailPage from './pages/DetailPage/DetailPage';
import { FormPage } from './pages/FormPage/FormPage';
import { HomePage } from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/detail/:id' element={<DetailPage />}/>
        <Route path='/form' element={<FormPage />}/>
      </Routes>
    </div>
  );
}

export default App;
