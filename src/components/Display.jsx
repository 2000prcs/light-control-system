import React, { Component } from 'react';
import $ from 'jquery';

// Importing jQuery directly with window to use roundSlider jQuery plugin
window.jQuery = window.$ = $;
require('../../public/lib/roundSlider.min.js');


export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getBrightness = this.getBrightness.bind(this);
  }

  componentDidMount() {
    this.getBrightness();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.room.id !== this.props.room.id) {
      this.getBrightness();
    }
  }

  // Clean-up jQuery plugin
  componentWillUnmount() {
    $('#slider').roundSlider('destroy');
  }

  // Get roundSlider jQuery plugin
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

  // Dynamically changing brightness value
  changeTooltip(e) {
    return `<div style="color:#FEC400;margin-right:10px"><i class="far fa-sun"></i></div>
              <div style="margin-top:10px;margin-bottom:10px">
                <span style="font-size:30px">${e.value}</span><span>%</span>
              </div>
            <div style="font-size:14px">Brightness</div>`;
  }


  render() {
    return (
      <div className="arrow_box">
        <div id="slider" />
      </div>
    );
  }
}
