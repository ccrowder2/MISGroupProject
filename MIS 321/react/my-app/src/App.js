import './App.css';
import Navbar from './Navbar.jsx'
import BookCarousel from './Carousels.jsx';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#333';
  })
  return (
    <div className="App">
      <Navbar />
      <BookCarousel genre={'Fiction'}/>
      <BookCarousel genre={'Biography'}/>
    </div>
  );
}

export default App;
