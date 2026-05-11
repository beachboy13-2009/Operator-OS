import { Link, Route, Routes } from 'react-router-dom';
import HealthPage from './pages/HealthPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100 antialiased">
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="text-lg font-semibold tracking-tight text-white">
            OperatorOS
          </Link>
          <nav className="flex gap-4 text-sm text-slate-400">
            <Link to="/" className="hover:text-slate-200">
              Home
            </Link>
            <Link to="/health" className="hover:text-slate-200">
              Health
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/health" element={<HealthPage />} />
        </Routes>
      </main>
    </div>
  );
}
