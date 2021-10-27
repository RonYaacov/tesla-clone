import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { store } from './app/store';
import { useState } from 'react';

function App() {
    const  [allAvelibleCars,
       setAllAvelibleCars] = useState(["model s", 'model y', 'model 3'])
  return (
    <div className="App">
      <Header
        allAvelibleCars = {allAvelibleCars}
       />
      <Home 
      setAllAvelibleCars = {setAllAvelibleCars}
      allAvelibleCars = {allAvelibleCars}
      />
    </div>
  );
}

export default App;

