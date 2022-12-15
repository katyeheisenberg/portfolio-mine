import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/home/home'
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
        </main>
    </>
  );
}

export default App;
