import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    onMode: false,
  }

  onClickButton = () => {
    this.setState(preState => ({
      onMode: !preState.onMode,
    }))
  }

  onButtonText = () => {
    const {onMode} = this.state
    return onMode ? 'Dark Mode' : 'Light Mode'
  }

  onClassname = () => {
    const {onMode} = this.state
    return onMode ? 'light' : 'dark'
  }

  render() {
    const buttonText = this.onButtonText()
    const cardClassName = this.onClassname()
    return (
      <div className="container">
        <div className={cardClassName}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
