import React from 'react'
import MovieCard from './movieCard.js'

const movieList = ({ movieList,  userId, movieCategory }) => {
	console.log(userId)
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	return (
		<div>
		<h2 className=''>{movieCategory}</h2>
		<div className='flex flex-wrap justify-center'>
		
		{
			movieList.map((movie, i) => {
			return (
			<MovieCard className='width250'
				key= {i}
				userId = {userId}
				movieId={movie.id} 
				title={movie.title} 
				voteavg={movie.vote_average}
				overview={movie.overview}
				poster = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				releaseDate = {` ${monthNames[new Date(movie.release_date).getMonth()]}, ${movie.release_date.substring(0,4)} `}
				like = {movie.like}
			/>
			);
		})
		}
	</div>
	</div>
	);
}



export default movieList;