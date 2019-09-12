import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, you've probably come here from my blog post
        </p>
        <a
            className="App-link"
            href="https://hargwit.com/blog/create-a-react-app-and-deploy-to-netlify"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to create a React app and deploy it to Netlify
          </a>
        <p>
          If you want to learn more awesome software dev stuff then you should check out my other blog posts below
        </p>
        <a
          className="App-link"
          href="https://hargwit.com/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          More blog posts!
        </a>
      </header>
    </div>
  );
}

export default App;
