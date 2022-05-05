import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super();

    this.state = {
      counter: 2,
      fields: [1],
    };

    this.addEducation = this.addEducation.bind(this);
  }

  addEducation() {
    this.setState({
      fields: this.state.fields.concat(this.state.counter),
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        {this.state.fields.map((field, index) => {
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
        <button onClick={this.addEducation} type="button">
          Add More
        </button>
      </fieldset>
    );
  }
}

export default Education;
