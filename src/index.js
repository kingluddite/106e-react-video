import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

const GOOGLE_API_KEY = 'AIzaSyDUAMBnBMyKmVCjKzKMTX5WmAvbAF2sq8Q';

YTSearch({ key: GOOGLE_API_KEY, term: 'soccer' }, data => {
  console.log(data);
});
// Create a new Component. This Component should produce some HTML
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// Take this Component's generated HTML and put it on the page (inside the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
