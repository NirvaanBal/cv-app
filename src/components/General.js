import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <fieldset>
        <legend>General</legend>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" autoFocus required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" required />
        </div>
      </fieldset>
    );
  }
}

export default General;
