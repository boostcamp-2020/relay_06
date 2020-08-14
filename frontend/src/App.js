// import React from "react";
import Navbar from './components/Navbar';
// import PostEdit from "./components/PostEdit";

// function App() {
//   return (

/* <div className="App">
  <Navbar />
  <PostEdit />
</div>; */

//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Gallery, Home } from './pages';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
