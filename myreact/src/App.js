import React from 'react';
import axios from 'axios';


import './App.css';

import Mainpage from './components/Mainpage';

class App extends React.Component {


  render() {

    return (
      <div className="App">
      <Mainpage />
     
      </div>
    )
  }
}
export default App;