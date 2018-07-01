import React, { Component } from 'react';
import './style.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='Pho'&format=json&origin=*`;
    e.preventDefault();
     fetch(url)
     .then((response) => {
        return response.json();
     })
     .then((result) => {
        console.log(result)
     }
  )
 }

  render() {
    return (
      <div className='container'>
          <div className='input-bar'>
              <input type='text' onChange={this.handleChange} />
              <button type='submit' onClick={this.handleSubmit}>Submit</button>
          </div>
      </div>
    );
  }
}

export default App;
