import { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component{
  state={
    selected: ''
  }
  
  handleLogin = (evt) => {
    const userId = this.state.selected
    if(userId===''){
      alert('Please select a user !')
    }
    else{
      this.props.handleLogin(userId)
    }
  }
  
  handleSelectedUser = (evt) => {
    this.setState({selected: evt.target.value})
  }
  
  render(){
    const { users } = this.props
    return(
      <div className='login-wraper'>
        <div className='login'>
          <h3>Sign in</h3>
          <select id='select-user' className='select-user-login' onChange={this.handleSelectedUser} defaultValue={'default'}>
            <option disabled value={'default'}>Select a user...</option>
            {
              Object.keys(users).map((userId) => {
                const { id, name } = users[userId]
                return(
                  <option key={id} value={id}>
                    {name}
                  </option>
                )
              })
            }
          </select>
          <button className='login-btn' onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { users } = state
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)