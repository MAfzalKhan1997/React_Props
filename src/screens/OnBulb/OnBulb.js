import React, { Component } from 'react'; 
import '../../App.css';

class OnBulb extends Component {

  constructor(props){
    super(props);

  }

  onBulb(){
    this.props.switchOn();
  }

  render() {
    return (
      <div className="App"> 
      <center> 
      <button id="on" onClick={this.onBulb.bind(this)}>ON</button>
      </center>
      </div>
    );
  }
}

export default OnBulb;
