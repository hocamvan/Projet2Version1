import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Lamp from './Lamp'

import Quotes from "./Quotes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
      applogo: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
    this.setState({ applogo: !this.state.applogo });
  };
  
  render() {
    const working = this.state.working ? 'working' : 'pause';
    const applogo = this.state.applogo ? 'App-logoA' : 'App-logoB';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={applogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="working">
          <button
            onClick={this.handleClick}
            className={working}>{working.toUpperCase()}</button>
          <figure className={working} />
        </div>
        {/* <Lamp  />
        <Lamp />  */}
        <Quotes />

      </div>
    );
  }
}

export default App;
