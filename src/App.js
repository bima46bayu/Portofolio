import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact/>
      {/* Section lain akan ditambahkan di sini */}
    </div>
  );
}

export default App;
