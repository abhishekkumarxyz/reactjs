// Write your code here

import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  increaseSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  decreaseSpeed = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="img-style"
          />
          <h1 className="sub-heading">Speed is {count}mph</h1>
          <p className="para-heading">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button
              type="button"
              className="btn-style btn1"
              onClick={this.increaseSpeed}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="btn-style btn2"
              onClick={this.decreaseSpeed}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
