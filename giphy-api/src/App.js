import React, { Component } from 'react';
import Form from './Form';
import Gif from './Gif';




class App extends Component {

  state = {
    gifData: []
  }

  getGiphy = async (e) => {
    e.preventDefault();
    const API_KEY = 'wIYyXlAx8qpY3srEP5EnDx52fCCjWLpY'
    const search = e.target.elements.search.value;

    const api_call = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=G&lang=en
    `);
    const data = await api_call.json();

    console.log('this is data', data.data);

    if (search) {
      this.setState({
        gifData: data.data
      })
    }
    console.log('this is state', this.state)
  }

  render() {
    return (
      <div className="App">
        <Form getGiphy={this.getGiphy}></Form>
        <Gif data={this.state.gifData}></Gif>
      </div>
    );
  }
}

export default App;
