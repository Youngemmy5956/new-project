import React from 'react'

export default function SecondChild(props) {
  return (
    <div>
        <h3>This is the second child component</h3>

        <button onClick={this.props.onClick}>Change Text</button>
        {/* <p>counter = {props.name}</p> */}
    </div>
  )
}
