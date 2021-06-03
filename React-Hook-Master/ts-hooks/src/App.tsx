import React from 'react';
import UseStateComponent from './UseStateComponent'
import UseEffectComponent from './UseEffectComponent'
import UseContextComponent from './UseContextComponent'
import UseReducerComponent from './UseReducerComponent'
import UseRefComponent from './UseRefComponent'
import CustomHookComponent from './CustomHookComponent'
import CustomHookComponent2 from './CustomHookComponent2'
import EvenMoreReactComponent from './EvenMoreReactComponent'

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
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>customHook</h1>
      <CustomHookComponent />
      <h1>customHook2</h1>
      <CustomHookComponent2 />
      <h1>Even more React component TS stuff</h1>
      <EvenMoreReactComponent />
    </div>
  );
}

export default App;
