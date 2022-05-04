import React, { Component } from 'react';

import General from './components/General';

class App extends Component {
  submitForm(e) {
    e.preventDefault();
  }

  render() {
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
        </div>
      </>
    );
  }
}

export default App;
