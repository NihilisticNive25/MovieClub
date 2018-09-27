import React from 'react';
import review from './review.png';

const movieCard = ({movieId, userId, title, voteavg, overview, poster, releaseDate, like}) => {
  
  const likeSwitch = (e) => {
    e.persist();
    console.log({movieId,userId,like})
    fetch('http://localhost:3001/likeMovie', {
    method : 'put',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      movieId : movieId,
      userId : userId ,
      isDeleted : like ? 1 : 0 
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data > 0){
      like = !like;
      const image = e.target;
      image.classList.toggle('liked')
      image.classList.toggle('like')
    }

  })

}

	return (
    

  <div className='dark-gray dt-ns  b--black-10 dib br1 pa2 ma2  bw2 shadow-5'>
    <div className="dt-row-ns mt1">
    <div className="dtc-ns">
       <img className=' br--top' alt='Poster' src={poster} width={250} height={250}/>
       </div>

       <div className="dtc-ns v-top">
       <div className="dt w-100 mt1">
          <div className="dtc">
            <h3 className="f5 f4-ns mv0 wrapText">{title}</h3>
          </div>      
        </div> 
       <div className="dt w-100 mt1">
          <div className="dtc ph1 tl">
            <p className="f5 mv0  mid-gray">{releaseDate}</p>
          </div>
          <div className="dtc tr">
            <h1 className="f5 mv0"><img className="ReviewSize mr1" alt='Review' src={review} />{voteavg}</h1>
          </div>
        </div>
        <div className="dt w-100 tc">
            <hr className="mw3 bb bw1 b--black-10"/>  
            <p className="lh-copy measure overviewWidth center f6 black-70"> {overview} </p>
        </div> 
    <div className="dt-ns w-100 mt1">
          <div className="dtc tr">
             <img onClick={(event) => likeSwitch(event)} alt='AddToFav' id='FavMovie' className={like ? 'liked' : 'like'} />
          </div>  
        </div> 
    </div>
    </div> 
  </div>

	);
}

export default movieCard;

