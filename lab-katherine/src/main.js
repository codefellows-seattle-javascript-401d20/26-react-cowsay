import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'

class Header extends React.Component {
  render() {
    return (
        <div>
          <header>
            <h1> Generate Cowsay Lorem </h1>
          </header>
        </div>
      )
  }
}

// write module
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: 'I need something good to say!',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(
      { content: cowsay.say({text: faker.lorem.words(10)})}
    )
  }

  render(){
    let {content} = this.state
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}> click me </button>
        <pre> {content} </pre>
      </div>
    )
  }
}

// export module
ReactDom.render(<App />, document.getElementById('root'))
