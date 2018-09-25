import React from 'react';
import SearchBox from './SearchBox.js';
import logo from './logo.png'
const NavBar = ({onButtonSubmit, searchChange, name, onRouteChange}) => {
	return (
      
      <div className="color-dark size pv1 center flex flex-wrap items-center justify-start">

    <h1 className="dim f3 lh-solid ml0-ns mr0 mv0 pl3 pl4-ns">
      <p onClick={() => onButtonSubmit('nowPlaying')} className="link antiquewhite">
         <img src={logo} height={40} />
      </p>
    </h1>
    <h1 className="dim f3 lh-solid ml0-ns mr0 mr4-l mv0 pl3 pl4-ns">
      <p className="b washed-red">MovieClub</p>
      </h1>

      
    <ul className="list flex flex-wrap justify-around ma0 pa0 dn dib-l">
  
        <li className="f5 dib mr4" role="menuitem">            
          <p onClick={() => onButtonSubmit('mostPopular')} className="dim link light-silver">
           Popular 
          </p>
        </li>
      
        <li className="f5 dib mr4" role="menuitem">
          <p onClick={() => onButtonSubmit('upcomingMovie')} className="dim link light-silver">
            Upcoming
          </p>
        </li>
      
        <li className="f5 dib mr4" role="menuitem">            
          <p onClick={() => onButtonSubmit('topRated')} className="dim link light-silver">
            Top rated
          </p>
        </li>
      
        <li className="f5 br3 dib mr4" role="menuitem">
            <SearchBox searchChange={searchChange}/>   
        </li>
      
    </ul>    
    
    <p onClick={() => onRouteChange('signout')} className="dib mr4 dim link light-silver flexend" >Sign Out</p>

  </div>
      
		);
}

export default NavBar;

