import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, email, phone } = this.props.general;

    return (
      <div className="overview">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <div className="edu">
          {this.props.education.map((course, index) => {
            return (
              <div className="course" key={index}>
                <p>{course.course}</p>
                <p>{course.school}</p>
                <p>{course.year}</p>
              </div>
            );
          })}
        </div>
        <button type="button" id="edit" onClick={this.props.editForm}>
          Edit
        </button>
      </div>
    );
  }
}

export default Overview;
