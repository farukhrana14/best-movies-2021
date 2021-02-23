import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>BEST MOVIES OF 2020</h1>
      <Person name="Wonder Woman" director="Patty Jenkins"></Person>
      <Person name="The Devil All the Time" director="Antonio Campos"></Person> 
      <Person name="Gretel Hansel" director="Oz Perkins"></Person> 
      <Person name="The Invisible Man" director="Leigh Whannell"></Person>  
      </header>
    </div>
  );
}



function Person(props) {
  
  const personStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    width: '500px',
  }
 
  return (
  <div style={personStyle}>
  <h2>Movie: {props.name}</h2>
  <h3>Director: {props.director}</h3>
  </div>
  )
}

export default App;
