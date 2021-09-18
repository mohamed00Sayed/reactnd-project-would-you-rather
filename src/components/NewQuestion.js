import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_QUESTION, handleAddQuestion } from '../actions/questions'
import history from '../history'

class NewQuestion extends Component{
  constructor(props){
    super(props)
    this.state={
      optOne: '',
      optTwo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddQuestion = this.handleAddQuestion.bind(this)
  }
  
  handleChange = (evt)=> {
    const inputId = evt.target.id
    if(inputId === 'opt-one-input'){
      this.setState({optOne: evt.target.value})
    }
    else{
      this.setState({optTwo: evt.target.value})
    }
  }
  
  handleAddQuestion = (evt)=> {
    //evt.preventDefault()
    if(this.state.optOne === '' || this.state.optTwo === ''){
      alert('Please fill empty fields !')
    }
    else{
      const optionOneText = this.state.optOne
      const optionTwoText = this.state.optTwo
      const author = this.props.authedUser
      const question = {
        optionOneText,
        optionTwoText,
        author
      }
      this.props.dispatch(handleAddQuestion(question))
      history.replace('/')
    }
  }
  
  render(){
    return(
      <div className='new-question'>
        <div className='new-question-header'>
          <h1>Create New Question</h1>
        </div>
        <div className='new-question-content'>
          <p>Complete the question:</p>
          <h3>Would you rather...</h3>
          <div>
            <input className='new-question-option-one'
              id='opt-one-input'
              placeholder={'Enter Option One Text Here'}
              onChange={this.handleChange}
            /> 
          </div>
          <hr /> 
          <div>
            <input className='new-question-option-two'
              id='opt-two-input'
              placeholder={'Enter Option Two Text Here'}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Link 
              to={'/'}
              onClick={this.handleAddQuestion}
            ><div className='new-question-submit'>SUBMIT</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { authedUser } = state
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)