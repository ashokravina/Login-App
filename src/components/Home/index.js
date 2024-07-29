// Write your code here

import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggIn: false}

  OnLogInButton = () => {
    this.setState(prevState => ({isLoggIn: !prevState.isLoggIn}))
  }

  render() {
    const {isLoggIn} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLoggIn={isLoggIn} />
          {isLoggIn ? (
            <Logout logout={this.OnLogInButton} />
          ) : (
            <Login login={this.OnLogInButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
