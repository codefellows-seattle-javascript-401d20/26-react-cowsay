// import assets
import './style/main.scss';

// import npm packages
import React from 'react';
import ReactDom from 'react-dom';
import Cowsay from 'cowsay';
import Faker from 'faker';

let Header = () => {
  return React.createElement('header', {},
      React.createElement('h1', {}, 'Generate Cowsay Lorem'));
};

// write module
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      output: 'I need something good to say!',
    }

    this.handleClick = this.handleClick.bind(this)
    // this.handleCowSet = this.handleCowSet.bind(this)
  }

  handleClick(e){
    this.setState(
      (prevState) => {
        return { output: Faker.lorem.words(10)};
      }
    )
  }

  // handleCowSet(e){
  //   let {value} = e.target;
  //   this.setState({counter: value});
  // }

  render(){
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}> change cowsay </button>
        // <input
        //   type='string'
        //   value={this.state.output}
        //   onChange={this.handleCowSet}
        //   />
        <pre> {Cowsay.say(text: this.state.output, f: 'cow')} </pre>
      </div>
    )
  }
};

// export module
ReactDom.render(<App />, document.getElementById('root'));
