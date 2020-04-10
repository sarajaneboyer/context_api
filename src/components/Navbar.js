import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';


// we import our consumer component and then wrap our return in it so we can access that context in our navbar
const Navbar = () => (
  <UserConsumer>
    { value => (
      <Menu>
        <NavLink to = '/'>
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to = '/user/profile'>
          <Menu.Item>
            { value.username }
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </UserConsumer>
)

export default Navbar;