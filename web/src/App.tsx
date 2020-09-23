import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  state = {
    display: false
  }

  changeState = () => {
    this.setState({display: !this.state.display});
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.changeState}>CHANGER LE STATE</button>
            { this.state.display && <div>BUTTON CLICKED</div> }
          </header>
        </div>
    );
  }
}
