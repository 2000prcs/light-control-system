import React, { Component } from 'react';
// import CircularSlider from 'react-circular-slider-bar';
import $ from 'jquery';
import Slider from 'react-rangeslider';
import 'npm-round-slider';
window.jQuery = window.$ = $;
require('../../public/roundSlider');
// import { CircularSlider } from 'circular-slider';


export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.getBrightness = this.getBrightness.bind(this);
  }

  componentDidMount() {
    this.setState({ brightness: this.props.room.brightness });
    this.getBrightness();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.room.id !== this.props.room.id) {
      this.getBrightness();
    }
  }

  getBrightness() {
    $('#slider').roundSlider({
      sliderType: 'min-range',
      editableTooltip: false,
      radius: 120,
      value: this.props.room.brightness,
      circleShape: 'pie',
      startAngle: 315,
      width: 10,
      handleSize: '+8',
      showTooltip: true,
      disabled: !this.props.room.active,
      drag: (args) => this.props.lightControl(args.value),
      tooltipFormat: this.changeTooltip,
    });
  }

  changeTooltip(e) {
    let val = e.value;
    return `<span style="font-size:30px">${val}</span>% <div style="font-size:14px">Brightness</div>`;
  }

  // componentWillUnmount() {
  //   this.$el.somePlugin('destroy');
  // }


  // change color gradient by sliding
  changeColor() {

  }

  render() {
    const { room, lightControl } = this.props;

    return (
      <div>
        <div id="slider">
          {/* <CircularSlider
            r={100}
            trackColor={'grey'}
            arcColor={'#7985f1'}
            trackWidth={15}
            thumbWidth={15}
            onChange={value => this.props.lightControl(value) }
          />  */}
          {/* <Slider
            min={0}
            max={100}
            value={room.brightness}
            onChange={value => (room.active ? lightControl(value) : null)}
          /> */}
        </div>
      </div>
    );
  }
}
