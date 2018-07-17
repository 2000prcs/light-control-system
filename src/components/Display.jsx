import React, { Component } from 'react';
import $ from 'jquery';
window.jQuery = window.$ = $;

require('../../public/roundSlider');


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
      handleSize: '+12',
      showTooltip: true,
      disabled: !this.props.room.active,
      drag: args => this.props.lightControl(args.value),
      tooltipFormat: this.changeTooltip,
    });
  }

  changeTooltip(e) {
    const val = e.value;
    return `<div style="color:#FEC400;margin-right:10px"><i class="far fa-sun"></i></div>
              <div style="margin-top:10px;margin-bottom:10px">
                <span style="font-size:30px">${val}</span><span>%</span>
              </div>
            <div style="font-size:14px">Brightness</div>`;
  }

  // componentWillUnmount() {
  //   this.$el.somePlugin('destroy');
  // }


  // change color gradient by sliding
  changeColor() {

  }

  render() {
    return (
        <div>
          <div id="slider" />
        </div>
    );
  }
}
