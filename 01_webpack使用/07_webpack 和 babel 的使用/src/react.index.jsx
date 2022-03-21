import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// function App() {
//   const [message, setMessage] = useState('Hello React')

//   return (
//     <>
//       <h2>{message}</h2>
//     </>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello react'
    }
  }

  render() {
    return (
      <div>{this.state.message}</div>
    )  
  } 
}

ReactDOM.render(<App />, document.getElementById('app'))