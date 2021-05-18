import './App.css';

function App() {

  const movies = [
    {name: "Wonder Woman",
    director: "Patty Jenkins",
    src: "https://www.thewrap.com/wp-content/uploads/2019/12/Wonder-Woman-1984-Poster-Gal-Gadot-CCXP-2019.jpg"},
    
    {name: "The Devil All the Time",
    director: "Antonio Campos",
    src: "https://www.heavenofhorror.com/wp-content/uploads/2020/09/the-devil-all-the-time-netflix-review.jpg"},

    {name: "Gretel Hansel",
    director: "Oz Perkins",
    src: "https://berkreviews.files.wordpress.com/2020/02/moviebannermaster-gretel.png"},
    
    {name: "The Invisible Man",
    director: "Leigh Whannell",
    src: "https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg"},
  ]

  return (
    <div className="App">
      <header className="App-header">
      <h1>BEST MOVIES OF 2020</h1>
      
     {
        movies.map(movie => <Movies movie= {movie}></Movies>) 
     }
     
      </header>
    </div>
  );
}

function Movies(props) {
  
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
    borderRadius: '10px',
    height: '300px'
  }

  const {name, director, src} = props.movie; // Destructuring of the object movie

  return (  
  <div style={divStyle}>
  <div style={personStyle}>
  <h2>Movie: {name}</h2>
  <h3>Director: {director}</h3>
  </div>
  <div style={personStyle}>
  <img style= {imgStyle} src={src} alt="" />
  </div>
  </div>
  )
}

export default App;
