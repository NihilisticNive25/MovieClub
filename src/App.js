import React from 'react';
import './App.css';
import MovieCardList from './Components/movieCardList.js'
import NavBar from './Components/NavBar.js'
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';

const initialState = {
   route : 'signin',
      isSignedIn : false,
      user : 
        {
          id: '',
          name: '',
          email: '',
        },
      movieList : [],
      searchfield: '',
      movieCategory: 'mostPopular',
      liked: false 
}
class App extends React.Component {
	constructor(){
		super()
		this.state = initialState;
	}

   componentDidMount(){
    document.title = "Movie Club"
  }

  onSearchChange = (event ) => {
    this.setState({searchfield : event.target.value})   
  }

	onButtonSubmit = (movieCategory) => {  
   
    let url = `http://localhost:3001/fetchMovieList/${movieCategory}/${this.state.user.id}`;  
      fetch(url)
      .then(res => res.json())
      .then((data) => {
      this.setState({movieList : []})
       if(movieCategory == "mostPopular"){
      this.setState({movieCategory : "Popular Movies"})
    }
    else if(movieCategory == "upcomingMovie"){
      this.setState({movieCategory : "Upcoming Movies"})
    }
    else if(movieCategory == "topRated"){
      this.setState({movieCategory : "Top Rated Movies"})
    }
    else if(movieCategory == "nowPlaying"){
      this.setState({movieCategory : "Now Playing"})
    }
      this.setState({movieList : data})      
      })
      .catch(err => console.log(err))
    }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
  }

  onRouteChange = (route) => {
      if (route === 'signin') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      }
      else if (route === 'signout') {
        this.setState(initialState)
      }
     this.setState({route: route});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      }
    })
  }

getNowPlaying = (data) => {
  this.setState({movieCategory : "Now Playing"})
   let url = `http://localhost:3001/fetchMovieList/nowPlaying/${data.id}`;  
      fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        
      this.setState({movieList : data})      
      })
      .catch(err => console.log(err))    
  }

  render() {
  	
    const {movieList,searchfield,movieCategory, route, user, latestMovie} = this.state; 
    const filteredMovies = movieList.filter(movie => {
      return movie.title.toLowerCase().includes(searchfield.toLowerCase());
      }
    ) 
    return (
      <div className="App">
      { route === 'home'
      ?     
      <div>       
           <NavBar className='block' onButtonSubmit = {this.onButtonSubmit} searchChange={this.onSearchChange}
               name={user.name} onRouteChange={this.onRouteChange} /> 
            <div>          
              <MovieCardList movieList = {filteredMovies} userId={user.id}  movieCategory={movieCategory}/>
            </div>
              </div> 
          
        : (
             route === 'signin' || route === 'signout' 
             ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} getNowPlaying={this.getNowPlaying}/>
             : <Register className="loginPageImg" onRouteChange={this.onRouteChange} loadUser = {this.loadUser} getNowPlaying={this.getNowPlaying}/>
          )
        }
        </div>
    );
  }
}

export default App;
