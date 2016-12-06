import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';

class UserDetails extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
    this.imgLoaded = this.imgLoaded.bind(this);
  }

  imgLoaded(){
    this.setState({loaded: true});
  }
  
  render(){
    const user = this.props.currentUser;

    if(!user){
      return <p>Select the user...</p>
    }

    return (
      <div>
        {!this.state.loaded ? <h3>Loading photo...</h3> : ''}
        <img src={this.props.currentUser.picture.large} 
          alt={this.props.currentUser.name.last}
          onLoad={this.imgLoaded} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserDetails);