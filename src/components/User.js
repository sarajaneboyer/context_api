import React from 'react';
import { Card, } from 'semantic-ui-react';


const User = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date Joined: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Card.Meta>
        <p>Status Level: statusLevel</p>
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Email: email</p>
    </Card.Content>
    <Card.Content>
      <p>Name: firstName + lastName</p>
    </Card.Content>
  </Card>
)

export default User;