import React from 'react';
import './App.css';
import BookingForm from './BookingForm'; // Adjust the path based on your project structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <BookingForm /> {/* Render your BookingForm component here */}
      </main>
    </div>
  );
}

export default App;
