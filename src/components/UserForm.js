import React, { Component, } from 'react';
import { Form, } from 'semantic-ui-react';

export default class UserForm extends Component {
  state = { username: '', statusLevel: '', email: '', firstName: '', lastName: '', };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  render(){
    const { username, statusLevel, email, firstName, lastName, } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          />
          <Form.Input
            label="New Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="New First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="New Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        <Form.Select
          label="Status Level"
          name="statusLevel"
          value={statusLevel}
          onChange={this.handleChange}
          options={statusOptions}
          />
          <Form.Button color='green'>Save!</Form.Button>
      </Form>
    )
  }
}


const statusOptions = [
  { key: "b", text: "Beginner", value: "Beginner", },
  { key: "n", text: "Novice", value: "Novice", },
  { key: "e", text: "Experienced", value: "Experienced", },
  { key: "s", text: "Skilled", value: "Skilled", },
  { key: "ex", text: "Expert", value: "Expert", },
];