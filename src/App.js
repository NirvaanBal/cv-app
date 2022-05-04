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

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');

    this.setState({
      user: { name: name.value, email: email.value, phone: phone.value },
    });

    name.value = '';
    email.value = '';
    phone.value = null;
  }

  editInfo() {}

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
            editInfo={this.editInfo}
          />
        </div>
      </>
    );
  }
}

export default App;
