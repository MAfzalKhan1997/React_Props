import React, { Component } from 'react'; 
import '../../App.css'; 

class BrokenBulb extends Component {

  constructor(props){
    super(props);

  }

  brokenBulb(){
    this.props.break();
  }
 
  render() {
    return (
      <div className="App"> 
  <center> 
      <button id="broken" onClick={this.brokenBulb.bind(this)}>BREAK</button> 
  </center>
      </div>
    );
  }
}

export default BrokenBulb;