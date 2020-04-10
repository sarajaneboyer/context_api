import React, { useContext } from 'react';
import { Card, } from 'semantic-ui-react';
import { UserContext, } from '../providers/UserProvider';

// same thing, importing our consumer and wrapping our user in it so we have access to all our user info without props
const User = () => {
  const { username, dateJoined, statusLevel, email, firstName, lastName, } = useContext(UserContext);

  return(
    <Card>
      <Card.Content>
        <Card.Header>{ username }</Card.Header>
        <Card.Meta>Date Joined: { dateJoined }</Card.Meta>
        <Card.Description>
          Email: { email }<br />
          First Name: { firstName }<br />
          Last Name: { lastName }
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <p>Status Level: { statusLevel }</p>
      </Card.Content>
    </Card>
  );
};
//   <UserConsumer>
//     { value => (
//       <Card>
//         <Card.Content>
//           <Card.Header>username</Card.Header>
//           <Card.Meta>
//             Date Joined: dateJoined
//           </Card.Meta>
//         </Card.Content>
//         <Card.Content>
//           <Card.Meta>
//             <p>Status Level: statusLevel</p>
//           </Card.Meta>
//         </Card.Content>
//         <Card.Content>
//           <p>Email: email</p>
//         </Card.Content>
//         <Card.Content>
//           <p>Name: firstName + lastName</p>
//         </Card.Content>
//       </Card>
//     )}
//   </UserConsumer>
// };

export default User;