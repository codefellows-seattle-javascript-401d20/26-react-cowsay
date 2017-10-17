import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

let Header = () => {
  return React.createElement('header', {},
    React.createElement('h1', {}, 'Generate Cowsay Lorem'));
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: ''
    }

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(){
    this.setState(() => {
      return {
        content: cowsay.say({
      	   text: faker.lorem.words(4),
         })
       };
    });
  }

  render(){
    return (
      <div>
        <Header />
        <button onClick={this.handleButton}> click me </button>
        <pre> {this.state.content} </pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
