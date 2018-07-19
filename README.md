# Light Controlling System

> Web application for a home automation light control system.

## Table of Contents

1. [Installation](#installation)
2. [Tests](#running-the-tests)

## Demo

👉 Watch Demo Video <a href="https://youtu.be/KEKBAi8L17Y">here</a>.
<br>


## Building Process
1. Rendered room data with [Light API](https://github.com/resin-io/light-api).
2. Created table with the room data using [Redintion Library](https://github.com/resin-io-modules/rendition).
3. Rendered light switches and created toggleSwitch method with [react-toggle-switch library](https://github.com/pgrimard/react-toggle-switch).
4. Looked into different libraries for rendering the round sliderbar for light controlling, and decided to go with [roundSlider jQuery plugin](https://github.com/soundar24/roundSlider). I made this decision in order to improve UI with a better user exprience. 
Other libraries I considered: [React Circular Slider bar library](https://github.com/alexsyo/react-circular-slider-bar),  [React Range slider library](https://whoisandy.github.io/react-rangeslider)
5. To highlight the room user selects, I added 'highlight' class to the selected table row.
6. To make arrow from the Display point to the highlighted room, I used [pseudostyle library](http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript) to change 'top' style attribute dynamically.
7. Used [HTML Color Codes](https://html-color-codes.info/colors-from-image) to match components colors with the wireframe design. 
8. Added detailed styling to match with the wireframe design as much as I can.
9. Achieved 85% unit testing coverage. The challenging part was testing Controller component by mocking events. 


## Prerequisites

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Installation

From within the root directory:

> Install project dependencies:

```sh
npm install
```

> Build a client bundle with webpack: 

```sh
npm run build (for development) 
```

## Running the Tests

```sh
npm run test
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management


## Style Guide

Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).
