export default function currentUser(state = null, action = {}) {
  switch(action.type){
    case 'USERNAME_CLICKED': {
      return action.payload
    }
  }
  return state;
}