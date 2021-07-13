import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { Link } from 'react-router-dom';
import '../style/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    }

    this.requestUsers = this.requestUsers.bind(this);
  }

  requestUsers ({ target: { value } }) {
    const { request } = this.props;
    this.setState({
      userInput: value,
    }, () => {
      if (value === '') {
        return;
      }
      request(value)
    });
  }

  render () {
    const { users } = this.props;
    return (
      <div className="main-page-home">
        <label htmlFor="user-input" className="user-input">
          <a href="https://github.com/vinigofr" target="_blank" rel="noreferrer">
            <img
              className="github-icon"
              alt="github img"
              src="data:image/png;base64,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"
            />
          </a>
         GitHub User Finder
          <input
            type="text"
            placeholder="Digite o termo de pesquisa"
            onChange={this.requestUsers}
            id="user-input"
          />
        </label>
        <section className="user-card">
          {users.length !== 0 || users === undefined ? users.items.map((user) => {
            return (
              <Link 
              to={`/user/${user.login}`} 
              params={{ user: user }}
              className="profile-link"
              >
                <span className="user-login">{user.login}</span>
                <img src={user.avatar_url} alt="User avatar" className="avatar-image" />
              </Link>
            )
          }) : 'Resultados aparecerão aqui!'
          }
        </section>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  users: state.usersData.users,
});

const mapDispatchToProps = (dispatch) => ({
  request: (query) => dispatch(fetchUsers(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);