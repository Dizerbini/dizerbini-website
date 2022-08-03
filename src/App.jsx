import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Nav from './components/nav/nav';

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Nav />
      <Home />
    </>
  );
}

export default App;
