import React from 'react'

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  )
}

// if we dont put in props.message,
// this will be default message
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner
