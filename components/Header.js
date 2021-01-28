// components/Header.js
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons

import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons'; 
import {
  faHome
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faHome
  )

const headerStyle = {
  backgroundColor: "#EEEEEA",
  color: "white",
  width: "100%",
};

const Header = () => (
  <div className="Header" style={headerStyle}>
  	<script src="https://kit.fontawesome.com/d8ff932f96.js" crossorigin="anonymous"> </script>
  	<div className="TopLine"></div>
    <img src="/CD_Logo.png" alt="Cloudy Donuts Logo" className="logo" />
    <div className="MenuBar">
    	<ul className="menu">
    		<li><a href=""><FontAwesomeIcon icon={faHome} /></a></li>
    		<li><a href="menu">Menu</a></li>
    		<li><a href="location">Locations & Hours</a></li>
    		<li><a href="contact">Contact Us</a></li>
    	</ul>
    </div>
      <style jsx>{`

	     @font-face { 
	      font-family:'Dosis';
	      src:url('/Dosis-Bold.ttf');
	      src:url('/Dosis-ExtraBold.ttf');
	      src:url('/Dosis-ExtraLight.ttf');
	      src:url('/Dosis-Light.ttf');
	      src:url('/Dosis-Medium.ttf');
	      src:url('/Dosis-Regular.ttf');
	      src:url('/Dosis-SemiBold.ttf');



	     }

        .logo {
			height: 10em;
		    margin-top: 50px !important;
		    display: block;
		    margin: 0 auto;
		    margin-bottom: 60px !important;
        }
        .TopLine {
        	background-color: #242323;
        	width: 100%;
        	height: 20px;
        }
    	.MenuBar {
    		text-align: center;
    	}

		.MenuBar ul {
			font-family:'Dosis';
			font-size: 22px;
		  list-style-type: none;
		  margin: 0;
		  padding: 0;
		  overflow: hidden;
		  background-color: #242323;
		}

		li {
			display: inline-block;
		}

		li a {
		  display: block;
		  color: white;
		  text-align: center;
		  padding: 15px 40px;
		  text-decoration: none;
		}

		li a:hover {
		  background-color: #EEEEEA;
		  color: black;
		}
      `}</style>
  </div>
);

export default Header;