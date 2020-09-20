import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Start'
    };

    this.timer = null;

    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {
    let state = this.state;
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Start'})
    } else {
      this.timer = setInterval(() => {        
        state.numero += 0.1;
        this.setState(state);
        this.setState({botao: 'Pause'})
      }, 100);
    }
  }

  clear() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'Start';
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img
          className="image"
          src={require('./assets/cronometro.png')}
          alt=""
        />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.start}>
            {this.state.botao}
          </a>
          <a className="botao" onClick={this.clear}>
            Clear
          </a>
        </div>
      </div>
    );
  }
}

export default App;
