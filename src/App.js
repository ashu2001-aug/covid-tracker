import React, {Component} from 'react';
import './App.css';

import Global from './containers/Globle/Globle'
import Countries from './containers/countries/countries'

class App extends Component {
  render() {
    return (
    <div>
        <Global/>
        <Countries/>
    </div>
    )
  }
}

export default App;