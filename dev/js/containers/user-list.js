import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser,fetchUsers} from '../actions/index';

class UserList extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(fetchUsers('https://randomuser.me/api/?results=10'));
  }

  renderUsers(){
    return this.props.users.map( (user, index) => (
      <li key={index} onClick={() => this.userClicked(user)}>
        {user.name.first} {user.name.last}
      </li>
    ));
  }

  userClicked(user){
    this.props.dispatch(selectUser(user));
  }
  
  render(){
    if(!this.props.users.length){
      return (
        <p>Fetching users...</p>
      );
    }

    return (
      <ul>
        {this.renderUsers()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}


export default connect(mapStateToProps)(UserList);