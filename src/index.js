import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const GOOGLE_API_KEY = '???';

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
