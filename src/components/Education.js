import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        {this.props.fieldCount.map((field, index) => {
          return (
            <div className="education-field" key={index}>
              <div className="form-control">
                <label htmlFor={`degree${field}`}>Course</label>
                <input type="text" id={`degree${field}`} />
              </div>
              <div className="form-control">
                <label htmlFor={`school${field}`}>School</label>
                <input type="text" id={`school${field}`} />
              </div>
              <div className="form-control">
                <label htmlFor={`year${field}`}>Passing Year</label>
                <input
                  type="number"
                  id={`year${field}`}
                  min={new Date().getFullYear() - 100}
                  max={new Date().getFullYear()}
                />
              </div>
            </div>
          );
        })}
        <button onClick={this.props.addEducation}>Add More</button>
      </fieldset>
    );
  }
}

export default Education;
