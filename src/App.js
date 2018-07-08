import React from 'react';
import './App.css';
import MovieCardList from './Components/movieCardList.js'
import NavBar from './Components/NavBar.js'


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			movieList : [],
			searchfield: '',
      movieCategory: 'mostPopular',
      liked: false 
		}
	}

   componentDidMount(){
    document.title = "Movie Club"
  }

  onSearchChange = (event ) => {
    console.log(event);
    this.setState({searchfield : event.target.value})   
  }

	onButtonSubmit = (movieCategory) => {  
  let url = "";  
    if(movieCategory === 'mostPopular'){
      url = 'https://api.themoviedb.org/3/movie/popular?api_key=32530325cbc463a86c1b0ab2b78e94d1&language=en-US'
    }
    else if(movieCategory === 'topRated' || movieCategory === 'bestOf5years'){
      url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=32530325cbc463a86c1b0ab2b78e94d1&language=en-US'
    }
      fetch(url)
      .then(res => res.json())
      .then((data) => {
          if(movieCategory === 'bestOf5years'){
          const past5Year = data.results.filter(movie => {
          var currentTime = new Date();
          return movie.release_date.substring(0,4) > currentTime.getFullYear() - 5
        })
          this.setState({movieList : past5Year})
      }
      else{
        this.setState({movieList : data.results})
      }
    })
      .catch(err => console.log(err))
    }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
  }

  render() {
  	
    const {movieList,searchfield,movieCategory} = this.state; 
    const filteredMovies = movieList.filter(movie => {
      return movie.title.toLowerCase().includes(searchfield.toLowerCase());
      }
    ) 

    return (
      <div className="App">
      <NavBar onButtonSubmit = {this.onButtonSubmit} searchChange={this.onSearchChange}/>  
      <MovieCardList movieList = {filteredMovies} />
        </div>
        
    );
  }
}

export default App;
