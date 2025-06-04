import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatbotsPage from './components/pages/ChatbotsPage/ChatbotsPage';
import Blisters2 from './components/pages/Blisters2/Blisters2';
import EmpaquePrimarioB2 from './components/pages/EmpaquePrimarioB2/EmpaquePrimarioB2';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChatbotsPage />} />
        <Route path="/blisters2" element={<Blisters2 />} />
        <Route path="/blisters2/empaqueprimario" element={<EmpaquePrimarioB2 />} />
        {/* Add more routes for other lines here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;