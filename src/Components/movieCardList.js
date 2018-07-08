import React from 'react'
import MovieCard from './movieCard.js'
const movieList = ({movieList, movieCategory}) => {
	return (
		<div>
		<div className=''>{movieCategory}</div>
		{
			movieList.map((movie, i) => {
			return (
			<MovieCard 
				key= {i}
				id={movie.id} 
				title={movie.title} 
				voteavg={movie.vote_average}
				overview={movie.overview}
				poster = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				releaseDate = {movie.release_date.substring(0,4)}
				like = {true}
			/>
			);
		})
		}
	</div>
	);
}


export default movieList;