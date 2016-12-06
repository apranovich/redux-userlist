export default function users(state = [], action = {}) {
  switch(action.type){
    case 'USERS_FETCHED': {
      const { results } = action.payload;
      return results;
    }
  }
  return state;
}