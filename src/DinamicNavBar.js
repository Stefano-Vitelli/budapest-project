const DinamicNavBar = () => {
     return ( 
          <header className="navegation">
               <nav className="nav-style">
                    <div className="personal-logo">
                         <a href="/" aria-label="home">
                              <img src="/Imagenes Web/cib-skyliner-white.svg" alt="stars-sky" className="stars"/>
                         </a>
                    </div>
                    <div className="information">
                         <ol className="ordered-list">
                              <li className="life-resume">
                                   <a href="/cv.pdf" target="_blank" rel="nofollow noopener noreferrer">Life Resume</a>
                              </li>
                              <li className="ContactMe">
                                   <a href="mailto:stefanovitelli9@gmail.com" target="_blank">Contact me</a>
                              </li>
                         </ol>
                    </div>
               </nav>
          </header>
      );
}
 
export default DinamicNavBar;