import { RECEIVED_REPOS } from "../actions";

const INITIAL = {
  repos: [],
}

const userRepos = (state = INITIAL, action) => {
  switch (action.type) {
    case RECEIVED_REPOS:
      return { ...state, repos: action.repos.sort((repoA, repoB) => repoB.stargazers_count - repoA.stargazers_count) };
    default:
      return state;
  }
}

export default userRepos;