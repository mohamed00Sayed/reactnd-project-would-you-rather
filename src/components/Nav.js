import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component{
  
  handleLogout = (evt) => {
    evt.preventDefault()
    this.props.handleLogout(evt)
  }
  
  render(){
    const { name, avatarURL, handleSideBar } = this.props
    return(
      <nav className='nav'>
        <ul >
          <li>
            <img src={avatarURL} alt='user avatar' style={{'height': '46px','float':'right'}}/>
          </li>
          <li >
            <a href='/' className='disabled-link'>{name}</a>
          </li>          
          <li>
            <NavLink to='/' exact activeClassName='active' onClick={handleSideBar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active' onClick={handleSideBar}>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active' onClick={handleSideBar}>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <a className='logout-btn' onClick={this.handleLogout} href='/' >Logout</a>
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