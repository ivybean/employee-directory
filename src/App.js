import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Background from './components/Background/Background';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Background /> */}
        <SearchBar />
    </div>
  );
}

export default App;