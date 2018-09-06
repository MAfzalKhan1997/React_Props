import React, { Component } from 'react'; 
import '../../App.css';
import Button from '@material-ui/core/Button'

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
      <Button id="off" variant="fab" color="primary" onClick={this.onBulb.bind(this)}>ON</Button>
      </center>
      </div>
    );
  }
}

export default OnBulb;
