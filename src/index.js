import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  // initializing this.state
  state = { lat: null, errorMessage: ''}

  // lifecycle methods
  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    )
  }

  componentDidUpdate () {
    console.log('it updated')
  }

  //have to define render method or give it logic
  // and conditions
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner />
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
