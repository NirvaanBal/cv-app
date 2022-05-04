import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super();

    this.state = {
      counter: 2,
      fields: [1],
    };

    this.addExperience = this.addExperience.bind(this);
  }

  addExperience() {
    this.setState({
      fields: [...this.state.fields, this.state.counter],
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        {this.state.fields.map((field) => {
          return (
            <div className="experience-field" key={field}>
              <div className="form-control">
                <label htmlFor={`job${field}`}>Designation</label>
                <input type="text" id={`job${field}`} />
              </div>
              <div className="form-control">
                <label htmlFor={`company${field}`}>Company</label>
                <input type="text" id={`company${field}`} />
              </div>
              <div className="form-control">
                <label htmlFor={`from${field}`}>From</label>
                <input
                  type="number"
                  id={`from${field}`}
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>
              <div className="form-control">
                <label htmlFor={`to${field}`}>To</label>
                <input
                  type="number"
                  id={`to${field}`}
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>
          );
        })}
        <button type="button" onClick={this.addExperience}>
          Add more
        </button>
      </fieldset>
    );
  }
}

export default Experience;
