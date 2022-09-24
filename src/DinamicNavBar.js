const DinamicNavBar = () => {
     return ( 
          <nav className="nav-style">
               <div className="personal-logo">
                    <a href="/" aria-label="home">
                         <img src="/Imagenes Web/stars-custom.svg" alt="stars-sky" className="stars"/>
                    </a>
               </div>
               <div className="information">
                    <ol className="ordered-list">
                         <li className="about-me">
                              <a href="/about">About me</a>
                         </li>
                         <li className="Portfolio">
                              <a href="/portfolio">Portfolio</a>
                         </li>
                         <li className="ContactMe">
                              <a href="/contact">Contact me</a>
                         </li>
                    </ol>
               </div>
          </nav>
      );
}
 
export default DinamicNavBar;