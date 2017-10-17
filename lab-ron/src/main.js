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
    this.state = { content: 'What do I say', }
    this.handleContent = this.handleContent.bind(this)
    this.handleContentSet = this.handleContentSet.bind(this)
  }

  handleContent() {
    this.setState(prevState => {
      return { content: faker.lorem.words(Math.ceil(Math.random() * 5)) }
    })
  }

  handleContentSet(e) {
    let { value } = e.target
    if (value === '') {
      value = ' ';
    }
    this.setState({ content: value })
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleContent}>Random CowSay</button>
        <br />
        <input
          type='string'
          value={this.state.content}
          onChange={this.handleContentSet}
        />
        <pre>
          {cowsay.say({
            text: this.state.content,
          })}
        </pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))