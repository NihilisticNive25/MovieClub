import React from 'react';
import SearchBox from './SearchBox.js';
import logo from './logo.jpg'

const NavBar = ({onButtonSubmit, searchChange}) => {
	return (
      
      <div className="color-dark pv4 w-100 center flex-ns flex-wrap items-center justify-start mw9 h1">

    <h1 className="dim f3 lh-solid ml0-ns mr0 mr4-l mv0 pl3 pl4-ns">
      <p onClick={() => onButtonSubmit('mostPopular')} className="link antiquewhite">
         <img src={logo} height={40} />
      </p>
    </h1>

    <ul className="list ma0 pa0 dn dib-l">
      
        <li className="f5 dib mr4" role="menuitem">
            
          <p onClick={() => onButtonSubmit('mostPopular')} className="dim link light-silver">
           Most popular 
          </p>
        </li>
      
        <li className="f5 dib mr4" role="menuitem">
            
          <p onClick={() => onButtonSubmit('bestOf5years')} className="dim link light-silver">
            Best of last 5 years
          </p>
        </li>
      
        <li className="f5 dib mr4" role="menuitem">
            
          <p onClick={() => onButtonSubmit('topRated')} className="dim link light-silver">
            Top rated
          </p>
        </li>
      
        <li className="f5 dib mr4" role="menuitem">
            
          <a href="/showcase/" className="dim link light-silver">
            Liked
          </a>
        </li>
      
        <li className="f5 dib mr4" role="menuitem">
            <SearchBox searchChange={searchChange}/>   
        </li>
      
    
      
    </ul>

    <div className="db dib-ns pl3"><form id="site-search-form" action="" role="search">
  <fieldset className="bn ma0 pa0">
    <label className="clip" htmlFor="search-input">Search</label>
    </fieldset>
</form>
</div>    

  </div>
      
		);
}

export default NavBar;

