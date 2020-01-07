import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
      <Decrement value="5"></Decrement>
      <ContactCard work="917-754-1337" mobile="718-646-8722" email="lippidy@fvl.org" name="Gautham Divakar"></ContactCard>
      <ContactCard work="902-109-0210" mobile="030-646-8722" email="lippidy@fvl.org" name="Harry Wu"></ContactCard>
      <ContactCard                     mobile="123-456-7890" email="lippidy@fvl.org" name="Paul Mooney"></ContactCard>
    </div>
  );
}


class ContactCard extends Component {
  render() {
    const workNumber = (this.props.work != undefined);
    console.log(this.props.work);
    return (
      <div className="card">
        <h6 className="header">{this.props.name}</h6>
        {workNumber &&
          <div className="body">
            <span className="field-value">{this.props.work}</span>
            <span className="field-name">Work</span> 
          </div>
        }
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


class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
    this.decrement = this.decrement.bind(this);
  }
  decrement() {
    if(this.state.value > 0) {
      this.setState({value: this.state.value - 1});
    } else {
      alert("Number can't be negative.");
    }
  }
  render() {
    return (
      <div className="bigBox">
        <span>{this.state.value}</span>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
