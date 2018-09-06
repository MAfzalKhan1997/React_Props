import React, { Component } from 'react'; 
import '../../App.css';
import Button from '@material-ui/core/Button'

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
      <Button id="broken" variant="contained" color="" onClick={this.brokenBulb.bind(this)}>BREAK</Button> 
  </center>
      </div>
    );
  }
}

export default BrokenBulb;