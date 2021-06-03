import React from 'react';
import UseStateComponent from './UseStateComponent'
import UseEffectComponent from './UseEffectComponent'
import UseContextComponent from './UseContextComponent'
import UseReducerComponent from './UseReducerComponent'

import './App.css';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
    </div>
  );
}

export default App;
