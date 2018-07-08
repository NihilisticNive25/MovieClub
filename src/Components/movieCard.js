import React from 'react'

const movieCard = ({title, voteavg, overview, poster, releaseDate, like}) => {
  
let fav = {like};
  const likeSwitch = (e) => {
    console.log(fav)
    fav = !fav;
    const image = e.target;
    image.classList.toggle('liked')
    image.classList.toggle('like')
    console.log(fav)

}

	return (
  <div className='dark-gray b--black-10 dib br1 pa3 ma2  bw2 shadow-5'>
  <img className=' br--top' alt='Poster' src={poster} width={250} height={250}/>
  <div className="dt w-100 mt1">
    <div className="dtc tl">
    <p className="f5 mv0  mid-gray">{releaseDate}</p>
    </div>
    <div className="dtc tr">
        <h1 className="f5 mv0">{voteavg}</h1>
      </div>
      </div>
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h3 className="f5 f4-ns mv0">{title}</h3>
      </div>      
    </div> 
 <div className="dt w-100 mt1">
      <div className="dtc tr">
      <img onClick={(e) => likeSwitch(e)} alt='AddToFav' id='FavMovie' className={fav ? 'liked' : 'like'} />
      </div>  
    </div> 
  </div>

	);
}

export default movieCard;

