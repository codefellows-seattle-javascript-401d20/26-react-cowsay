import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import Cowsay from 'cowsay'
import Faker from 'faker'

class Header extends React.Component {
  render() {
  return ('header', {},
      React.createElement('h1', {}, 'Generate Cowsay Lorem'))
  }
};

// write module
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      output: 'I need something good to say!',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState(
      prevState => {
        return { output: Cowsay.say({text: Faker.lorem.words(10)})}
      }
    )
  }

  render(){
    let newOutput = this.state.output;
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}> change cowsay </button>
        <pre> {newOutput} </pre>
      </div>
    )
  }
}

// export module
ReactDom.render(<App />, document.getElementById('root'))
