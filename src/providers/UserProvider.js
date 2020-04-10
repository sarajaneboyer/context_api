import React, { Component, } from 'react';

// this is our initial context
export const UserContext = React.createContext();

// here we are creating an exportable consumer of our UserContext so we can use it in another component
export const UserConsumer = UserContext.Consumer;

export default class UserProvider extends Component {
  state= {
    username: "CodingFairy",
    // fun fact this is the first ever International Programmers Day!
    dateJoined: "9/13/2007",
    statusLevel: "Expert",
    email: "codingfairy@gmail.com",
    firstName: "Betty",
    lastName: "Holberton",
    updateAccount: (account) => this.updateAccount(account),
  };

  updateAccount = (account) => {
    this.setState({...account, });
  };

  render() {
    return(
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
};