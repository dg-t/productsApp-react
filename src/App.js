import React from 'react';
import Products from './products.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="app-header"><h1>My React App</h1></header>
        <section>
          <Products></Products>
        </section>
      </div>
    );
  }
}

export default App;
