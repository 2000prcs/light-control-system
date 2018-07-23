import React from 'react';
import { Button, Input } from 'rendition';

// Input field appears when user selects a particular lightbulb
const Display = ({ room, handleChange }) => {
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
        Lighting
      </span>
      { room.id ? <Input m={2} placeholder="Change Room Name" onChange={handleChange} /> : null}
    </div>
  );
};

export default Display;
