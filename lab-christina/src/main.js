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
    this.handleCowsaySet = this.handleCowsaySet.bind(this)
  }

  cowsayNext(){
    this.setState((prevState) => {
      return { content: cowsay.say({text:faker.lorem.words(3)})}
    })
  }

  handleCowsaySet(e){
    let {value} = e.target
    this.setState({cowsay: value})
  }

  render(){
    return (
      <div>
        <Header />
        <pre
          content={this.state.cowsay}
          onChange={this.handleCowsaySet}
        />
        <p> {this.state.title} </p>
        <button onClick={this.cowsayNext}> Click Me </button>
        <p> {this.state.cowsay} </p>
        <p> {this.state.content} </p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
