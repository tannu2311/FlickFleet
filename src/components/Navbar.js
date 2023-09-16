import React,{useState, useEffect} from 'react';
import "./Navbar.css"

function Navbar() {
    // effect : black bg comes under navbar when the user scrolls down 
    const [Show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", ()=>{
          if(window.scrollY > 100){
              setShow(true);
          }
          else setShow(false);
      });
      return()=>{
          window.removeEventListener("scroll");
      };
    }, []);
    

    return (
    <div className={`nav ${Show && "nav__black"}`}>
        {/* <img className="nav__logo__my" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/ISO_639_Icon_my.svg" alt="Netflix Logo" /> */}
        {/* <img className="nav__logo__netflix" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" /> */}
        <img className="nav__logo__netflix" src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="Netflix Logo" />
        {/* <img className="nav__logo__netflix" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png" alt="Netflix Logo" /> */}
        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
    </div>
    )
}

export default Navbar;
