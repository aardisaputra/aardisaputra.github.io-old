import './App.css';
import Navbar from './navbar';
import Body from './body';
import Body2 from './body2';

function App() {
  return (
    <div className="app">
      <div className='navBarArea'>
        <Navbar />
        <hr></hr>
      </div>
      <Body />
      <Body2 />

    </div>
  );
}

export default App;
