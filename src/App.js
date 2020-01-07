import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import './ContactCard.css';

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/

function App() {
  return (
    <div className="App">
      <ContactCard work="917-754-0000" mobile="718-646-8722" email="lippidy@fvl.org" name="Gautham Divakar"></ContactCard>
      <ContactCard work="917-754-0000" mobile="718-646-8722" email="lippidy@fvl.org" name="Harry Wu"></ContactCard>
      <ContactCard work="917-754-0000" mobile="718-646-8722" email="lippidy@fvl.org" name="Paul Mooney"></ContactCard>
    </div>
  );
}


class ContactCard extends Component {
  render() {
    return (
      <div className="card">
        <h6 className="header">{this.props.name}</h6>
        <div className="body">
          <span className="field-value">{this.props.work}</span>
          <span className="field-name">Work</span> 
        </div>
        <div className="body">
          <span className="field-value">{this.props.mobile}</span>
          <span className="field-name">Mobile</span> 
        </div>
        <div className="body">
          <span className="field-value">{this.props.email}</span>
          <span className="field-name">Email</span> 
        </div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  work: PropTypes.string,
  mobile: PropTypes.string.isRequired,
};

export default App;
