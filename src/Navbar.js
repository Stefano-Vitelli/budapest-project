import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
     return ( 
               <div className="begining">
                    <div className="interactive">
                         <Typewriter 
                              typeSpeed={86}
                              delaySpeed={20000}
                              words={["' Your life does not get better by chance, it gets better by change.'"]} />
                    </div>
                              <h1 className="first-header"> I'm Stefano Vitelli</h1>
                              <h2 className="own-name">a very curious man</h2>
                              <img src="/Imagenes Web/stars-custom.svg" alt="stars-sky" className="stars-paragraph"/>
                         <div className="paragraph">
                                        <h3 className="third-header">About me</h3>
                              <p>
                                   I am twenty-six years old Argentinian-Italian citizen, that never wants to stop learning. 
                                   Four years ago after finishing my two degrees in my home country, I decided to move to Europe 
                                   to broaden the horizon of knowledge, develope new skills and learn about new cultures.
                                   <br/> Currently I am a Trainee Web Developer, based in Budapest, who is looking to a continue
                                   growing with one aim: become a Full Stack Developer.  
                              </p>

                                        <h3 className='four-header'> To be more precise...</h3>
                              <p className='second-paragraph'>  
                                   When I decided to change my profession, I did it in pursuit of personal and professional growth in areas that were unknown to me until then.
                                   I believe that we have the freedom to choose and it is our decisions that define the path of our own life. 
                                   <br/><br/>
                                   Let me share my own path with you.
                                   <br /><br /><br />
                                        <ol>
                                             <li className='motiv-letter'>
                                                  <a href="/Motivation-letter.pdf" target="_blank" rel="nofollow noopener noreferrer">Letter</a> 
                                             </li>
                                        </ol>
                              </p>
                              
                              <img src="/Imagenes Web/stars-custom.svg" alt="stars-sky" className="stars-end"/>
                          </div>    
               </div>
      );
}

export default Navbar;