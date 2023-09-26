import './App.css';
import DetailPage from './pages/DetailPage/DetailPage';
import { FormPage } from './pages/FormPage/FormPage';
import { HomePage } from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/detail/:id' element={<DetailPage />}/>
      <Route path='/form' element={<FormPage />}/>
    </Routes>
  );
}

export default App;
