import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/home/home'
import About from './components/About/About';

function App() {
  return (
    <>
        <Header />
        <main className="main">
          <Home />
          <About />
        </main>
    </>
  );
}

export default App;
