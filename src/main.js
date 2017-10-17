// import assets
import './style/main.scss'

// import npm packages
import React from 'react'
import ReactDom from 'react-dom'

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
      content: 'content',
      preview: 'preview',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleContentSet = this.handleContentSet.bind(this)
  }

  handleInc(){
    this.setState(() => {
      return { content: this.preview}
    })
  }

  handleContentSet(e){
    let {value} = e.target
    this.setState({preview: value})
  }

  render(){
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}> click me </button>
        <input
          type='text'
          value={this.state.content}
          onChange={this.handleContentSet}
        />
        <pre> {this.state.preview} </pre>
        <pre> content: {this.state.content} </pre>
      </div>
    )
  }
}

// export module
ReactDom.render(<App />, document.getElementById('root'))
