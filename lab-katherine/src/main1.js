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
      cow: Cowsay.say({text: 'I need something good to say!'}),
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleCowsay = this.handleCowsay.bind(this);
  }

  handleClick(){
    this.setState(() => {
      return { cow: Cowsay.say({text: Faker.lorem.words(5)})};
    })
  };

  handleCowsay(e){
    let {value} = e.target;
    this.setState({cow: value});
  };

  render(){
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}> generate a cow </button>
        // <input
        //   value={this.state.cow}
        //   onChange={this.handleCowsay}
        //   />
        <pre> {this.state.cow} </pre>
      </div>
    )
  }
}

// export module
ReactDom.render(<App />, document.getElementById('root'))
