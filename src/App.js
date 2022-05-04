import React, { Component } from 'react';

import General from './components/General';
import Overview from './components/Overview';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
        email: '',
        phone: null,
      },
      education: [],
      fieldCount: [1],
      counter: 2,
    };

    this.inputFields = this.inputFields.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  inputFields() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const educationFields = document.querySelectorAll('.education-field');

    return { nameField, emailField, phoneField, educationFields };
  }

  submitForm(e) {
    e.preventDefault();
    const fields = this.inputFields();
    const eduArr = [];

    fields.educationFields.forEach((field, index) => {
      const course = field.querySelector(`#degree${index + 1}`);
      const school = field.querySelector(`#school${index + 1}`);
      const year = field.querySelector(`#year${index + 1}`);

      eduArr.push({
        course: course.value,
        school: school.value,
        year: year.value,
      });
    });

    this.setState({
      user: {
        name: fields.nameField.value,
        email: fields.emailField.value,
        phone: fields.phoneField.value,
      },
      education: [...eduArr],
    });

    fields.nameField.value = '';
    fields.emailField.value = '';
    fields.phoneField.value = null;
    fields.educationFields.forEach((field, index) => {
      const course = field.querySelector(`#degree${index + 1}`);
      const school = field.querySelector(`#school${index + 1}`);
      const year = field.querySelector(`#year${index + 1}`);
      course.value = '';
      school.value = '';
      year.value = null;
    });
  }

  editForm() {
    const { name, email, phone } = this.state.user;
    const fields = this.inputFields();

    fields.nameField.value = name;
    fields.emailField.value = email;
    fields.phoneField.value = phone;
  }

  addEducation() {
    this.setState({
      fieldCount: this.state.fieldCount.concat(this.state.counter),
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { name, email, phone } = this.state.user;
    const general = { name, email, phone };

    return (
      <>
        <div className="header">
          <h1>CV Prototype</h1>
        </div>
        <div className="content">
          <form onSubmit={this.submitForm} noValidate>
            <General legend="General" />
            <Education
              legend="Education"
              addEducation={this.addEducation}
              fieldCount={this.state.fieldCount}
            />
            <button type="submit">Submit</button>
          </form>
          <Overview
            general={general}
            education={this.state.education}
            editForm={this.editForm}
          />
        </div>
      </>
    );
  }
}

export default App;
