import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import CreateDirectory from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
        <CreateDirectory />
    </div>
  );
}

export default App;