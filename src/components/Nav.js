import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component{
  
  handleLogout = (evt) => {
    this.props.handleLogout(evt)
  }
  
  render(){
    const { name, avatarURL } = this.props
    return(
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <button className='logout-btn' onClick={this.handleLogout}>Logout</button>
          </li>
          <li>
            {name}
          </li>
          <li>
            <img src={avatarURL} alt='authed user avatar' />
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  const { authedUser, users } = state
  const { name, avatarURL } = users[authedUser]
  return {
    name,
    avatarURL
  }
}

export default connect(mapStateToProps)(Nav)