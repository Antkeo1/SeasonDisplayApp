import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if(errorMessage) {
    content = <div>{errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat}/>
  } else {
    content = <Spinner message="Please accept location request"/>
  }
  return (
    <div className='border red'>
      {content}
    </div>
  )
}

// class App extends React.Component {
  // initializing this.state
  // state = { lat: null, errorMessage: ''}

  // lifecycle method
  // componentDidMount () {

  // }

  // function with logic on rendering content = helper method
  // renderContent() {
    // if (this.state.errorMessage && !this.state.lat) {
      // return <div> Error: {this.state.errorMessage}</div>
    // }
    // if (!this.state.errorMessage && this.state.lat) {
      // return <SeasonDisplay lat={this.state.lat}/>
    // }
    // return <Spinner message="Please accept location request"/>
  // }

  //have to define render method or give it logic
  // and conditions
  // render() {
    // return (
      // <div className='border red'>
        // {this.renderContent()}
      // </div>
    // )
  // }
// }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
