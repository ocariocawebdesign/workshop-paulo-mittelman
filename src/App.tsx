import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Obrigado from './pages/Obrigado';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-onyx text-sand selection:bg-brand-purple selection:text-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
