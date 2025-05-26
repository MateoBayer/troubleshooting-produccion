import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatbotsPage from './components/pages/ChatbotsPage/ChatbotsPage';
import Blisters2 from './components/pages/Blisters2/Blisters2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatbotsPage />} />
        <Route path="/blisters2" element={<Blisters2 />} />
        {/* Add more routes for other lines here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;