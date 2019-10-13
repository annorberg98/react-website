import React, {useState, useEffect} from 'react';
import './App.css';

import Main from './components/Main/Main';

export default function App() {
  // Declare a new state variable
  const [page, setPage] = useState('home');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
      // Update the document title using the browser API
      console.log({page});
  });

  return (
    <div className="App">
      <Main />
    </div>
  );
}

class PageComponent extends React.Component {
  callback = (page) => {
    // do something with value in parent component, like save to state
  }

  
}