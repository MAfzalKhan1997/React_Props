import React, { Component } from 'react'; 
import '../../App.css'; 

class OffBulb extends Component {

  constructor(props){
    super(props);

  }

  offBulb(){
    this.props.switchOff();
  }
 
  render() {
    return (
      <div className="App"> 
      <center> 
        <button  id="off" onClick={this.offBulb.bind(this)}>OFF</button>
      </center>
      </div>
    );
  }
}

export default OffBulb;