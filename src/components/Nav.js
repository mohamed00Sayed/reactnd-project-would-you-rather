import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  handleLogout = (evt) => {
    evt.preventDefault();
    this.props.handleLogout(evt);
  };

  render() {
    const { name, avatarURL, handleSideBar } = this.props;
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={avatarURL}
              alt="user avatar"
              style={{ width: "40px" }}
              className="rounded-pill"
            />
          </a>
          <span className="navbar-text">{name}</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={handleSideBar}
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add"
                  activeClassName="active"
                  onClick={handleSideBar}
                  className="nav-link"
                >
                  New Question
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/leaderboard"
                  activeClassName="active"
                  onClick={handleSideBar}
                  className="nav-link"
                >
                  Leaderboard
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.handleLogout} href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser, users } = state;
  const { name, avatarURL } = users[authedUser];
  return {
    name,
    avatarURL,
  };
}

export default connect(mapStateToProps)(Nav);
