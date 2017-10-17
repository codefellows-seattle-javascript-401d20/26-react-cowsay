import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'What Does The Cowsay?',
    }

    this.cowsayNext = this.cowsayNext.bind(this)
  }

  cowsayNext(){
    this.setState(() => {
      return { content: cowsay.say({text:faker.lorem.words(3)})}
    })
  }

  render(){
    return (
      <div>
        <Header />
        <p> {this.state.title} </p>
        <button onClick={this.cowsayNext}> Click Me </button>
        <p> {this.state.cowsay} </p>
        <pre> {this.state.content} </pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
