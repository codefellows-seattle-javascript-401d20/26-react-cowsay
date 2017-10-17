import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Cowsay Lorem</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      output: 'What Does The Cowsay?',
    }

    this.cowsayNext = this.cowsayNext.bind(this)
    this.cowsayPrevious = this.cowsayPrevious.bind(this)
    this.handleCowsaySet = this.handleCowsaySet.bind(this)
  }

  cowsayNext(){
    this.setState((prevState) => {
      return { output: cowsay.say({text:faker.lorem.words(10)})}
    })
  }

  cowsayPrevious(){
    this.setState((prevState) => {
      return { output: cowsay.say({text:faker.lorem.words(10)})}
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
        <button onCLick={this.cowsayNext}> cowsay what </button>
        <button onCLick={this.cowsayPrevious}> cowsaid what </button>
        <input
          type="text"
          value={this.state}
          onChange={this.handleCowsaySet}
        />
        <p> cowsay: {this.state.cowsay} </p>
        <p> {this.state.output} </p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElemntById('root'))
