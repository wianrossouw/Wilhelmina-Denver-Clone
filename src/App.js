import logo from './logo.svg';
import './main.css';
import Error from './pages/Error'
import Body from './components/Body.js'
import Wstudio from './pages/Wstudio.js'
import Join from './pages/Join.js'
import About from './pages/About.js'
import Favourites from './pages/Favourites';
import Contact from './pages/Contact';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='w-studio' element={<Wstudio />} />
          <Route path='favourites' element={<Favourites />} />
          <Route path='join' element={<Join />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
