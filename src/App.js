import React, { Component } from 'react';

import General from './components/General';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';

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
      experience: [],
    };

    this.inputFields = this.inputFields.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  inputFields() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const educationFields = document.querySelectorAll('.education-field');
    const experienceFields = document.querySelectorAll('.experience-field');

    return {
      nameField,
      emailField,
      phoneField,
      educationFields,
      experienceFields,
    };
  }

  submitForm(e) {
    const form = document.querySelector('form');
    e.preventDefault();
    const fields = this.inputFields();
    const eduArr = [];
    const expArr = [];

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

    fields.experienceFields.forEach((field, index) => {
      const job = field.querySelector(`#job${index + 1}`);
      const company = field.querySelector(`#company${index + 1}`);
      const from = field.querySelector(`#from${index + 1}`);
      const to = field.querySelector(`#to${index + 1}`);

      expArr.push({
        job: job.value,
        company: company.value,
        from: from.value,
        to: to.value,
      });
    });

    this.setState({
      user: {
        name: fields.nameField.value,
        email: fields.emailField.value,
        phone: fields.phoneField.value,
      },
      education: eduArr,
      experience: expArr,
    });

    form.reset();
  }

  editForm() {
    const { name, email, phone } = this.state.user;
    const { education, experience } = this.state;
    const fields = this.inputFields();

    fields.nameField.value = name;
    fields.emailField.value = email;
    fields.phoneField.value = phone;
    fields.educationFields.forEach((field, index) => {
      const course = field.querySelector(`#degree${index + 1}`);
      const school = field.querySelector(`#school${index + 1}`);
      const year = field.querySelector(`#year${index + 1}`);

      course.value = education[index].course;
      school.value = education[index].school;
      year.value = +education[index].year;
    });
    fields.experienceFields.forEach((field, index) => {
      const job = field.querySelector(`#job${index + 1}`);
      const company = field.querySelector(`#company${index + 1}`);
      const from = field.querySelector(`#from${index + 1}`);
      const to = field.querySelector(`#to${index + 1}`);

      job.value = experience[index].job;
      company.value = experience[index].company;
      from.value = +experience[index].from;
      to.value = +experience[index].to;
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
            <Education legend="Education" />
            <Experience legend="Experience" />
            <button type="submit">Submit</button>
          </form>
          <Overview
            general={general}
            education={this.state.education}
            experience={this.state.experience}
            editForm={this.editForm}
          />
        </div>
      </>
    );
  }
}

export default App;
