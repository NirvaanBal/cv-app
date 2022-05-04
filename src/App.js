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
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    this.setState({
      user: { name, email, phone },
    });
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
          <Overview name={name} email={email} phone={phone} />
        </div>
      </>
    );
  }
}

export default App;
