function selectUser(user) {
  return { type: 'USERNAME_CLICKED', payload: user }
}

function usersFetched(data) {
  return { type: 'USERS_FETCHED', payload: data }
}

function fetchUsers(apiUrl) {
  return (dispatch, getState) => {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => dispatch(usersFetched(json)))
  }
}

export {
  selectUser,
  usersFetched,
  fetchUsers
}