import React from 'react';
import './App.css';
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" render = { () => <div>Home</div> }/>
          <Route exact path="/user/profile" render = { () => <UserProfile /> } />
        </Switch>
      </Container>
    </>
  );
}

export default App;
