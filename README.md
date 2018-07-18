# Light Controlling System

> This application is to control lightning for each room. User can controll the amount of light by using the sliderbar.

## Table of Contents

1. [Installation](#installation)
2. [Tests](#running-the-tests)

## Demo


## Building Process
1. Rendered room data from [Light API](https://github.com/resin-io/light-api).
2. Took advantage of [Redintion Library](https://github.com/resin-io-modules/rendition).
3. Toggle switch library
4. React circular slider bar library -> React range slider library -> JQuery roundSlider plugin (better user exprience) 
5. Highlighting selected room by walking DOM elements 
6. Styled components to match the wireframe design
7. To move arrow box with room selection, used pseudostyle 

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
npm test
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management


## Style Guide

Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).
