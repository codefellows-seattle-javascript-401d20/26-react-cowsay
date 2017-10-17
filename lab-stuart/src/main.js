import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

let Header = () => {
  return (
    <header>
      <h1>Generate Cowsay Lorem</h1>
    </header>
  )
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cow: 'default',
      content: faker.lorem.words(4)
    }

    this.cows = [];

    cowsay.list((err, cows) => {
      if(err)
        throw new Error('Cowsay Broke');
        this.cows = [...cows];
    });

    this.handleButton = this.handleButton.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleButton(){
    this.setState(() => {
      return {
        content: faker.lorem.words(4)
       };
    });
  }

  handleSelect(e){
    let {value} = e.target;
    this.setState(() => {
      return {
        cow: value
       };
    });
  }

  render(){
    return (
      <div>
        <Header />
        <button onClick={this.handleButton}> click me </button><br />
        <select onChange={this.handleSelect} value={this.state.cow}>
          {this.cows.map((name, i) => { return <option key={i} value={name}> {name} </option> })}
        </select>
        <pre> { cowsay.say({ f: this.state.cow, text: this.state.content }) } </pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
