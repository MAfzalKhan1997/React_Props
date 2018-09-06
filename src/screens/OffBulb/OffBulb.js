import React, { Component } from 'react'; 
import '../../App.css'; 
import Button from '@material-ui/core/Button'

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
        <Button id="off" variant="fab" color="secondary" onClick={this.offBulb.bind(this)}>OFF</Button>
      </center>
      </div>
    );
  }
}

export default OffBulb;