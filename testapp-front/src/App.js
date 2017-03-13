import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// const SERVERURL = 'http://localhost:8080';
// const SERVERURL = 'http://stevo.ca';
const SERVERURL = '';

class App extends Component {
  constructor(){
    super();
      this.state = {
        things: {
          cool: ['coding', 'good food', 'fun people'],
          not_cool: ['losing an hour of sleep', 'Trumpism']
        },
        stuff: "blah blah"
      }
      this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler () {
    let _this = this;
    axios.get(SERVERURL + '/test')
    .then (function (response) {
      _this.setState({
        stuff: response.data
      })
    })
  }

  render() {
    return (
      <div className="App container">
        <Stuff clickHandler={this.clickHandler} stuff={this.state.stuff} things={this.state.things}/>
      </div>
    );
  }
}

class Stuff extends Component {

  render() {
    return(
      <div className="Stuff"> 
          <button className="btn-info" onClick={this.props.clickHandler}> Click me! </button>
          <h4>{this.props.stuff}</h4>
          <h5>Cool: {this.props.things.cool}</h5>
          <h5>Not Cool: {this.props.things.not_cool}</h5>
      </div>
    )
  }
}

export default App;
