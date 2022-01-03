import React from 'react'
import ReactDOM from 'react-dom'
import Headers from './Headers';

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];

    return (
      <div>
        <h1>
          Micro Frontend 4
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>
        <Headers></Headers>
        <p>
          React Version: {reactVersion}
        </p>
      </div> 
    )
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('mfe4-element', Mfe4Element);