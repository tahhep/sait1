import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-purple-500/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          🚀 Квантовая телепортация
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            📖 Презентация
          </Link>
          <Link
            to="/quiz"
            className={`px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/quiz'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            📝 Тест
          </Link>
        </div>
      </div>
    </nav>
  );
}
