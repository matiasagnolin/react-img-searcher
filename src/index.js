import React from 'react';
import SearchBar from './SearchBox';
import unsplash from './api/unsplash';
import ReactDOM from 'react-dom';
import ImageList from './ImageList';


class App extends React.Component{

    state = { images: [] };

    onSearchSubmit = async term => {
      const response = await unsplash.get('/search/photos', {
        params: { query: term }
      });
  
      this.setState({ images: response.data.results });
    };
  
    render() {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      );
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));