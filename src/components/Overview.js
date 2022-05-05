import React, { Component } from 'react';
import './Overview.css';

class Overview extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, email, phone } = this.props.general;

    return (
      <div className="overview">
        <h2>{name}</h2>
        <div className="e-p">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <h3>Education</h3>
        <div className="edu">
          {this.props.education.map((course, index) => {
            return (
              <div className="course" key={index}>
                <h4>{course.course}</h4>
                <p>{course.school}</p>
                <p>{course.year}</p>
              </div>
            );
          })}
        </div>
        <h3>Experience</h3>
        <div className="exp">
          {this.props.experience.map((job, index) => {
            return (
              <div className="job" key={index}>
                <h4>{job.job}</h4>
                <p>{job.company}</p>
                <div className="f-t">
                  <p>From {job.from}</p>
                  <p>To {job.to}</p>
                </div>
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
