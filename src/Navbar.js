import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  return ( 
    <div className="begining">
      <div className="interactive">
        <Typewriter className="text-change"
          typeSpeed={86}
          delaySpeed={20000}
          words={["' Your life does not get better by chance, it gets better by change.'"]}
        />
      </div>
      <h1 className="first-header">I'm Stefano Vitelli</h1>
      <h2 className="own-name"> Web Developer</h2>
      <img
        src="/Imagenes Web/stars-custom.svg"
        alt="stars-sky"
        className="stars-paragraph"
      />
      <div className="paragraph">
        <h3 className="third-header">About me</h3>
        <p>
          My name is Stefano Vitelli, a very passionate and dedicate Trainee Web Developer.<br/>
          I have been working with a few technologies like HTML, CSS, JS and REACT to create simple, but powerful websites. <br /><br />
          My aim is to find that little thing that make us different and create an impact through web development.
        </p>

        <h3 className='four-header'>Values</h3>
        <p className='second-paragraph'>  
          I believe that being dedicate, hard working, passionate about what you do and always keeping the best attitude into
          a working team, is the key to face each project and create something really good. <br /><br />
          What makes us different? How can we create an impact? Can we create something better? That's the idea...
        </p>

        <img
          src="/Imagenes Web/stars-custom.svg"
          alt="stars-sky"
          className="stars-end"
        />
      </div>    
    </div>
  );
}

export default Navbar;
