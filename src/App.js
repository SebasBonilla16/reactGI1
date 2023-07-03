import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      contacts: [
      {
        name: 'Sebastian Bonilla',
        number: '1234567890',
        dateOfBirth: "February 16, 2000"
      },
      {
        name: 'Katherine Bonilla',
        number: '0987654321',
        dateOfBirth: 'April 9, 2002'
      },
      {
        name: 'Juan Bonilla',
        number: '2468013579',
        dateOfBirth: 'May 16, 1967'
      }
    ]
    };
  }
  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        {this.state.contacts.map((contact, index) => (
            <BasicInfo
              key = {index}
              name = {contact.name}
              number = {contact.number}
              dateOfBirth = {contact.dateOfBirth}
            />
        ))}
      </div>
    );
  }
}

export default App;
