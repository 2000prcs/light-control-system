import React from 'react';
import { Button } from 'rendition';

const Display = () => {
  return (
    <div className="menu">
      <Button m={2} tertiary square>
        <i className="fas fa-home" />
      </Button>
      <Button w={80} m={2} tertiary>
        <i className="fas fa-angle-left" />
        <span>
          Back
        </span>
      </Button>
      <span className="lighting">
        <i className="far fa-lightbulb" />
        <span>
          Lighting
        </span>
      </span>
    </div>
  );
};

export default Display;