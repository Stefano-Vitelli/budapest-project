
const Navbar = () => {
     return ( 
               <div className="begining">
                    <h1 className="first-header"> Welcome... I am</h1>
                         <h2 className="own-name">Stefano Vitelli</h2>
                              <div className="paragraph">
                                   <p>
                                        Trainee Web Developer currently based in Budapest, HU. <br/>
                                        My style pretends to build simple but powerful websites.     
                                   </p>
                              </div>
                              

                              <h4>Let me share with you my brief storie <br/> built around my own life.
               </h4>
               <a href="/CV-STEFANO-VITELLI.pdf" target="_blank" rel="nofollow noopener noreferrer">
                              <button className="button__text">
                                   <span>LAUNCH RESUME</span>
                              </button>
                         </a>

                         <div className="contact-me">
                              <a href="/contact-form" target='_blank'>
                         <button className="contact-me">Contact Me</button></a>
                         </div>
               </div>
                              

     

      );
}

export default Navbar;