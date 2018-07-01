import React, { Component } from 'react';
import './style.css'
import Result from './Result'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '', 
      array: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.input}&format=json&origin=*`;
    e.preventDefault();
     fetch(url)
     .then((response) => {
        return response.json();
     })
     .then((result) => {
        this.setState({
           array: result['query']['search']
        })        
     }
  )
 }

  render() {
    let result;

    if (this.state.array.length === 0) 
      result = null;
    else 
      result = <Result resultArray = {this.state.array} />

    return (
      <div className='container'>
          <form className='input-bar'>
              <input type='text' onChange={this.handleChange} />
              <button type='submit' onClick={this.handleSubmit}>Submit</button>
          </form>
          {/* {this.state.array.length > 0 ? (<div>{this.state.array[2]['title']}</div>) : null } */}
          <div>{result}</div>
      </div>
    );
  }
}

export default App;
