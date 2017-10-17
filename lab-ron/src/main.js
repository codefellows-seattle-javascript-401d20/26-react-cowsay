import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>What does the Cow Say?</h1>
      </header>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { content: '', }
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleContent = this.handleContent.bind(this)
    this.handleContentSet = this.handleContentSet.bind(this)
  }

  handleContent() {
    this.setState(prevState => {
      return { content: faker.lorem.words(5) }
    })
  }

  handleInc() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 }
    })
  }

  handleDec() {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 }
    })
  }

  handleContentSet(e) {
    let { value } = e.target
    this.setState({ content: value })
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleContent}>CowSay</button>

        <br />
        <input
          type='number'
          value={this.state.content}
          onChange={this.handleContentSet}
        />
        <p>content: {this.state.content}</p>


      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))