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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  wikiLink(article) {
    let  url = `https://en.wikipedia.org/wiki/${article}`
    window.open(url);
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

 handleClick(e) {
    let  url = `https://en.wikipedia.org/wiki/Special:Random`
    window.open(url);
 }

 render() {
    let result = (this.state.array.length === 0) 
                 ? null
                 : <Result resultArray = {this.state.array} onCheck = {this.wikiLink}/>

    return (
      <div className='container'>
        <h1>Wikipedia Viewer</h1>
          <div id='form-element'>
            <form id='form-input'>
                <input type='text' id = 'search' onChange={this.handleChange} autoFocus={true} />
                <button type="submit" value="Submit" onClick={this.handleSubmit}><i className="fas fa-search"></i></button>            
                <button type='button' onClick={this.handleClick}><i className="fas fa-random"></i></button>                          
            </form>
          </div>
          <div id='list-element'>
               {result}
          </div>
      </div>
    );
  }
}

export default App;
