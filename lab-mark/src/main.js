// import assets
import './style/main.scss'

// import npm packages
import React from 'react'
import ReactDom from 'react-dom'
import Faker from 'faker'
import Cowsay from 'cowsay-browser'

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
      content: Cowsay.say({text: 'Click button to change this text!'}),
      preview: Cowsay.say({text: 'Type in the box to change this text!'}),
      lorem: 'Click button to change this text!', // Keep track of this for switching cows on click section
      typed: 'Type in the box to change this text!', // Keep track of this for switching cows on dynamic section
      cowA: 'default',
      cowB: 'default',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChangeContent = this.handleChangeContent.bind(this)
    this.handleChangePreview = this.handleChangePreview.bind(this)
    this.handleContentSet = this.handleContentSet.bind(this)
    this.cowList = []

    // Get all the cows from cowsay.... minus the bad ones.
    Cowsay.list((err, cows) => {
      if(err)
        throw new Error('Cowsay Bug')

      this.cowList = [...cows]
    });
  }

  handleClick() {
    let words = Faker.lorem.words(10)
    this.setState({content: Cowsay.say({text: words, f: this.state.cowA}), lorem: words})
  }

  handleChangeContent(e) {
    let {value} = e.target.options[e.target.selectedIndex]
    this.setState({content: Cowsay.say({text: this.state.lorem, f: value}), cowA: value})
  }

  handleChangePreview(e) {
    let {value} = e.target.options[e.target.selectedIndex]
    this.setState({preview: Cowsay.say({text: this.state.typed, f: value}), cowB: value})
  }

  handleContentSet(e) {
    let {value} = e.target

    if (!e.target.value)
      value = 'Type in the box to change this text!'

    this.setState({preview: Cowsay.say({text: value, f: this.state.cowB}), typed: value})
  }

  render(){

    let makeOption = (cowName, i) => {
      return <option value={cowName} key={i}>{cowName}</option>
    }

    return (
      <div>
        <Header />
        <button onClick={this.handleClick}> click me </button>
        <select onChange={this.handleChangeContent} defaultValue='default'>
          {this.cowList.map((cow, i) => makeOption(cow, i))}
        </select>
        <pre> {this.state.content} </pre>
        <h1>Generate Dynamic Cowsay</h1>
        <input
          type='text'
          onChange={this.handleContentSet}
        />
        <select onChange={this.handleChangePreview} defaultValue='default'>
          {this.cowList.map((cow, i) => makeOption(cow, i))}
        </select>
        <pre> {this.state.preview} </pre>
      </div>
    )
  }
}

// export module
ReactDom.render(<App />, document.getElementById('root'))
