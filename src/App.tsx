import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Presentation from './pages/Presentation';
import Quiz from './pages/Quiz';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
