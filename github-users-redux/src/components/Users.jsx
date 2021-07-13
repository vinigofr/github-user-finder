import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRepos } from '../actions'
import '../style/Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { user } }, repo } = this.props;
    repo(user);
  }

  render() {
    const { match: { params: { user } }, repoArr } = this.props;

    return (
      <div className="main-user-element">
        <h1 className="repos-title">{`Principais repositórios de ${user}`}</h1>
        <div className="repos-container">
          {repoArr.map((repo) => {
            return (
              <div className="repo-card">
                <h2>{repo.name}</h2>
                <div>
                  <p>{repo.description ?
                   `${repo.stargazers_count} ⭐ - 
                    ${repo.description}` :
                    `${repo.stargazers_count} ⭐ - Sem descrição criada`}</p>
                </div>
                <a 
                href={`https://github.com/${repo.owner.login}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
                >
                  Acessar no GitHub 🔗
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  repoArr: state.userRepos.repos, 
})

const mapDispatchToProps = (dispatch) => ({
  repo: (user) => dispatch(fetchRepos(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);