import React, { Component } from 'react';
import $ from 'jquery';

// Importing jQuery directly with window to use roundSlider jQuery plugin
window.jQuery = window.$ = $;
require('../../public/lib/roundSlider.min.js');


export default class Display extends Component {
  componentDidMount() {
    this.renderSlider();
  }

  // Re-render roundSlider when current room changes
  componentDidUpdate(prevProps) {
    if (!prevProps.room.id !== this.props.room.id) {
      this.renderSlider();
    }
  }

  // Clean-up jQuery plugin when the component unmounts
  componentWillUnmount() {
    $('#slider').roundSlider('destroy');
  }

  // Dynamically changing brightness value
  changeTooltip(e) {
    return `<div style="color:#FEC400;margin-right:10px"><i class="far fa-sun"></i></div>
    <div style="margin-top:10px;margin-bottom:10px">
    <span style="font-size:30px">${e.value}</span><span>%</span>
    </div>
    <div style="font-size:14px">Brightness</div>`;
  }
  
  // Render roundSlider jQuery plugin
  renderSlider() {
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

  render() {
    return (
      <div className="arrow_box">
        <div id="slider" />
      </div>
    );
  }
}
