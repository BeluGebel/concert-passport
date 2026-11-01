import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/layout/navbar';
import Home from './pages/home';
import Explore from './pages/explore';
import MyPassport from './pages/my-passport';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#110D1C] text-white">
        <header className="border-b border-white/10 px-8 py-5">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <span className="text-xl font-bold">Concert Passport</span>
            <Navbar />
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-8 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/passport" element={<MyPassport />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
