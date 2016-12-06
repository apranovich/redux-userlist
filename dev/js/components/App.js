import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

const App = () => (
  <div>
    <strong>User list:</strong>
    <UserList/>
    <hr/>
    <strong>User details:</strong>
    <UserDetails/>
  </div>
);

export default App;