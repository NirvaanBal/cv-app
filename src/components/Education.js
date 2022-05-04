import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
      </fieldset>
    );
  }
}

export default Education;
