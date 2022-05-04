import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="overview">
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
        <button id="edit" onClick={this.props.editForm}>
          Edit
        </button>
      </div>
    );
  }
}

export default Overview;
