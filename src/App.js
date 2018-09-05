import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
import OnBulb from './screens/OnBulb/OnBulb'
import OffBulb from './screens/OffBulb/OffBulb'
import BrokenBulb from './screens/BrokenBulb/BrokenBulb'

class App extends Component {

  constructor(){
    super();

    this.state={
      image : require('./images/off.jpg') ,
      bulb : 'off',
 
    }
  }

onBulb(){ 

  this.setState({
    image: require("./images/on.png"),
    bulb:'on', 
  })
}

offBulb(){
 
  this.setState({
    image: require('./images/off.jpg') ,
    bulb:'off', 
  })
}

brokenBulb(){ 

  this.setState({
    image: require("./images/broken.jpg"),
    bulb:'off', 
  })
}

  render() {
    const {image,bulb} = this.state;
    return (
      <div className="App"> 
<br/><br/> 

{ <img src={image} alt="" width="300" height="400" /> }
 
{ bulb === 'off' && <OnBulb switchOn={this.onBulb.bind(this)} /> }
{ bulb === 'on' && <OffBulb switchOff={this.offBulb.bind(this)} /> }
{<BrokenBulb break={this.brokenBulb.bind(this)} /> }
 
      </div>
    );
  }
}

export default App;
