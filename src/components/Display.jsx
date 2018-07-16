import React, { Component } from 'react';
import CircularSlider from 'react-circular-slider-bar';
import $ from 'jquery';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: 0,
    };
    // this.getBrightness = this.getBrightness.bind(this);
  }

  componentDidMount(){
    this.setState({brightness: this.props.room.brightness});
  }


  // getBrightness(){
  //   let value;
  //   setTimeout(() => {
  //     console.log(document.getElementsByClassName('rs-tooltip-text')[0].innerText);
  //     value = document.getElementsByClassName('rs-tooltip-text')[0];
  //     let el = $('#slider')
  //     console.log(el.value)
  //   }, 2000);
  // }


  // change color gradient by sliding
  changeColor(){

  }

  render() {

    return (
      <div>
         <div>
          <div>{this.props.room.brightness}%</div>
          <div>Brightness</div>
        </div>
        <div id="slider">
          <CircularSlider
            r={100}
            trackColor={'grey'}
            arcColor={'#7985f1'}
            trackWidth={15}
            thumbWidth={15}
            onChange={value => this.props.lightControl(value) }
          /> 
        </div>

      </div> 
    );
  }
}
