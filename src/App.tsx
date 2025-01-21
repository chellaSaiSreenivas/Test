import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import { projectsMenu, galleryMenu } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        
        {/* Project Category Routes */}
        {projectsMenu.map((item) => (
          <Route
            key={item.link}
            path={item.link}
            element={<CategoryPage type="project" category={item} />}
          />
        ))}
        
        {/* Gallery Category Routes */}
        {galleryMenu.map((item) => (
          <Route
            key={item.link}
            path={item.link}
            element={<CategoryPage type="gallery" category={item} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;