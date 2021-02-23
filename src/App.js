// import logo from './logo.svg';
import './App.css';
// import { findByLabelText } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>BEST MOVIES OF 2020</h1>
      <Person name="Wonder Woman" director="Patty Jenkins" src="https://www.thewrap.com/wp-content/uploads/2019/12/Wonder-Woman-1984-Poster-Gal-Gadot-CCXP-2019.jpg"></Person>
      <Person name="The Devil All the Time" director="Antonio Campos" src="https://www.heavenofhorror.com/wp-content/uploads/2020/09/the-devil-all-the-time-netflix-review.jpg"></Person> 
      <Person name="Gretel Hansel" director="Oz Perkins" src="https://berkreviews.files.wordpress.com/2020/02/moviebannermaster-gretel.png"></Person> 
      <Person name="The Invisible Man" director="Leigh Whannell" src="https://d10ukrc8bht4o0.cloudfront.net/images/iva-img/26653dbacd0d042c0a4413cf114251ac/source.jpg"></Person>  
      </header>
    </div>
  );
}



function Person(props) {
  
  const personStyle = {
    border: '5px solid white',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    width: '500px',
  }

  const divStyle = {
    overflow: 'hidden',
    display: 'flex',
  }

  const imgStyle ={
    width: '450px',
    borderRadius: '10px'
  }

  return (  
  <div style={divStyle}>
  <div style={personStyle}>
  <h2>Movie: {props.name}</h2>
  <h3>Director: {props.director}</h3>
  </div>
  <div style={personStyle}>
  <img style= {imgStyle} src={props.src} alt={props.name} />
  </div>
  </div>
  )
}

export default App;
