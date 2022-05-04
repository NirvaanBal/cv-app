import React, { Component } from 'react';

import General from './components/General';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
        email: '',
        phone: null,
      },
    };

    this.inputFields = this.inputFields.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  inputFields() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');

    return { nameField, emailField, phoneField };
  }

  submitForm(e) {
    e.preventDefault();
    const fields = this.inputFields();
    this.setState({
      user: {
        name: fields.nameField.value,
        email: fields.emailField.value,
        phone: fields.phoneField.value,
      },
    });

    fields.nameField.value = '';
    fields.emailField.value = '';
    fields.phoneField.value = null;
  }

  editForm() {
    const { name, email, phone } = this.state.user;
    const fields = this.inputFields();

    fields.nameField.value = name;
    fields.emailField.value = email;
    fields.phoneField.value = phone;
  }

  render() {
    const { name, email, phone } = this.state.user;

    return (
      <>
        <div className="header">
          <h1>CV Prototype</h1>
        </div>
        <div className="content">
          <form onSubmit={this.submitForm} noValidate>
            <General />
            <button type="submit">Submit</button>
          </form>
          <Overview
            name={name}
            email={email}
            phone={phone}
            editForm={this.editForm}
          />
        </div>
      </>
    );
  }
}

export default App;
