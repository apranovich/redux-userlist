import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {
  
  userClicked(user){
    this.props.selectUser(user);
  }

  renderUsers(){
    return this.props.users.map( (user) => (
      <li key={user.id} onClick={() => this.userClicked(user)}>
        {user.firstname} {user.lastname}
      </li>
    ));
  }
  
  render(){
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

function mapActionsToProps(dispatch){
  return bindActionCreators({selectUser}, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(UserList);