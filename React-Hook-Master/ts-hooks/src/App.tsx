import React from 'react';
import UseStateComponent from './UseStateComponent'
import UseEffectComponent from './UseEffectComponent'
import './App.css';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <UseEffectComponent />
    </div>
  );
}

export default App;
