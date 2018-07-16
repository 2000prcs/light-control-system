import React, { Component } from 'react';
import CircularSlider from 'react-circular-slider-bar';
import $ from 'jquery';
import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';


export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
    };
  }

  componentDidMount() {
    this.setState({ brightness: this.props.room.brightness });
  }


  // change color gradient by sliding
  changeColor() {

  }

  render() {

    const { room, lightControl } = this.props;

    return (
      <div>
         <div className="room-brightness" >
           <div>
             <span className="brightness">{this.props.room.brightness}</span>
             <span className="percent">%</span>
          </div>
           <div className="text-brightness">Brightness</div>
         </div>
        <div id="slider">
          {/* <CircularSlider
            r={100}
            trackColor={'grey'}
            arcColor={'#7985f1'}
            trackWidth={15}
            thumbWidth={15}
            onChange={value => this.props.lightControl(value) }
          />  */}
          <Slider
            min={0}
            max={100}
            value={room.brightness}
            onChange={value => (room.active ? lightControl(value) : null)}
          />
        </div>
      </div>
    );
  }
}
