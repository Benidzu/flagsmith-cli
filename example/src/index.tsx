import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import flagsmith from 'flagsmith'
import {FlagsmithProvider} from 'flagsmith/react'
import App from './App';
import state from './flagsmith.json'
flagsmith.setState(state)
ReactDOM.render(
  <FlagsmithProvider options={{defaultFlags:state.flags}} flagsmith={flagsmith}>
    <App />
  </FlagsmithProvider>,
  document.getElementById('root')
);