import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Languages from './pages/Languages';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Education from './pages/Education';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gradient min-vh-100 d-flex flex-column">
        <Header />
        <main className="container flex-grow-1 py-4 animate__animated animate__fadeIn animate__faster">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="text-center py-3 text-muted small mt-auto">
          &copy; {new Date().getFullYear()} Amit Rathore. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;