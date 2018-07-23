# Light Control System

> Web application for a home automation light control system.

## Table of Contents

1. [Usage](#usage)
2. [Testing](#testing)

## Demo

👉 Watch Demo Video <a href="https://youtu.be/KEKBAi8L17Y">here</a>.

<br>

<img src="https://i.imgur.com/waXmfvb.png">

## Achievements

1. Clean and simple UI
2. Dynamically change brightness value & lightbulb name
3. Improved maintainability to dynamically rendering data - each child component of main App component is rendering data dynamically
4. Responsive design for improving the user exprience
5. Automated testing for components

## Build Process

1. Rendered room data with [Light API](https://github.com/resin-io/light-api).
2. Created table with the room data using [Rendition Library](https://github.com/resin-io-modules/rendition).
3. Rendered light switches and created toggleSwitch method with [react-toggle-switch library](https://github.com/pgrimard/react-toggle-switch).
4. Looked into different libraries for rendering the round sliderbar for light control, and decided to go with [roundSlider jQuery plugin](https://github.com/soundar24/roundSlider). I made this decision in order to improve UI with a better user exprience. 
Other libraries I considered: [React Circular Slider bar library](https://github.com/alexsyo/react-circular-slider-bar),  [React Range slider library](https://whoisandy.github.io/react-rangeslider)
5. To highlight the room user selects, I added 'highlight' class to the selected table row.
6. To make arrow from the Display point to the highlighted room, I used [pseudostyle library](http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript) to change 'top' style attribute dynamically.
7. Used [HTML Color Codes](https://html-color-codes.info/colors-from-image) to match components colors with the wireframe design. 
8. Added detailed styling to match with the wireframe design.
9. Input field appears when user selects a particular light bulb to change the name.
10. With CSS media queries, achieved responsive design for different screen sizes.
11. Implemented automatic testing for each components.

## Requirements

1. User should be able to turn lightbulbs on and off, set the brightness of a lightbulb.

I used React Toggle Switch to turn the lightbulbs on/off, and roundSlider to set the brightness of a lightbulb by dragging the handle. 

2. Setting a bulb to 0% brightness should be the equivalent of turning it off and a light bulb that is switched off should show 0% brightness.

When user drags the roundSlider, a method `lightControl()` gets invoked to set the brightness value dynamically. When the brightness value is 0, a method `getSwitchStatus()` gets invoked with `false` value and it turns the light switch off. 

3. User should be able to change the descriptive name of a particular light bulb.

When user selects a particular room name, input field appears to allow the user to change the descriptive name in real time.

4. You should be able to use the web app, from a mobile device or a laptop

Achieved responsive design by adding media queries for different screen sizes.


## Prerequisites

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Usage

From within the root directory:

1. Install project dependencies & Build a client bundle with Webpack::

```sh
npm install
```

2. Open `public/index.html` in your browser

3. Enjoy!

## Testing

```sh
npm test
```

## Built With

* [React](https://reactjs.org/) 
* [NPM](https://www.npmjs.com/)
* [Light API](https://github.com/resin-io/light-api)
* [Redintion](https://github.com/resin-io-modules/rendition)
* [React Toggle Switch](https://github.com/pgrimard/react-toggle-switch)
* [RoundSlider](https://github.com/soundar24/roundSlider)

## Style Guide

Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).
