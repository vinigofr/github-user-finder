export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVED_USERS = 'RECEIVED_USERS';
export const RECEIVED_REPOS = 'RECEIVED_REPOS';

const requestUsers = () => ({
  type: REQUEST_USERS,
});

const receivedUsers = (users) => ({
  type: RECEIVED_USERS,
  users,
});

const receivedRepos = (repos) => ({
  type: RECEIVED_REPOS,
  repos,
});

export function fetchUsers(searchParameter) {

  return (dispatch) => {
    dispatch(requestUsers());
    // https://docs.github.com/en/rest/reference/search
    return fetch(`https://api.github.com/search/users?q=${searchParameter}&per_page=5`)
      .then(response => response.json())
      .then(users => dispatch(receivedUsers(users)));
  };
}

export function fetchRepos(user) {
  return (dispatch) => {
    // dispatch(requestUsers());
    console.log(user);
    return fetch(`https://api.github.com/users/${user}/repos?per_page=3`)
      .then(response => response.json())
      .then(repos => dispatch(receivedRepos(repos)));
  };
}
