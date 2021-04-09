// components/Header.js
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faTwitter,
	faGithub,
	faLinkedin,
  } from '@fortawesome/free-brands-svg-icons'
  library.add(
	faTwitter,
	faGithub,
	faLinkedin
	)
  
  /* const footerStyle = {
	backgroundColor: 'green',
	color: "white",
	width: "100%",
	height: "400px" 
  }
  */
  
  ;

// import your icons

import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons'; 
import {
  faHome
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faHome
  )

const headerStyle = {
  backgroundColor: "#FC4A1A", 
  color: "white",
  width: "100%",
};

const Header = () => (
  <div className="Header" style={headerStyle}>
	  <div className = "Left">
  	<script src="https://kit.fontawesome.com/d8ff932f96.js" crossorigin="anonymous"> </script>

    <img src="flowerboi2.png" alt="C=o" className="devPic" />

	<ul className = "fontawesome" >
   <li>

   <a href = "https://github.com/oluwatoni-oyinloye" className="github">
  <FontAwesomeIcon icon={faGithub} />
  </a>
  </li>
   
   <li>
   <a href ="https://www.linkedin.com/in/oluwatoni-oyinloye-328a7212b/" className="linkedin"> 
  <FontAwesomeIcon icon={faLinkedin} />
  </a>
  </li>
  
  <li>
  <a href= "https://twitter.com/ToniCodes1" className="twitter">
  <FontAwesomeIcon icon={faTwitter} />
  </a>
  </li>
  </ul>
  </div>

  <div className = "Right">
  <h2 className = "topFont"> Oluwatoni Oyinloye</h2>
  <h2 className = "topFont1"> Software Developer</h2>
  
  <div className= "skills">
  <embed src= "js.svg"/>

   
  <embed src= "css.svg"/> 
  <embed src= "html.svg"/> 
  <embed src= "react.svg"/> 

  <embed src= "aws.svg"/> 

  <embed src= "python.svg"/> 
  
 
  
  </div>
  </div>

  
 
    <div className="skillBar">
    	<ul className="menu">

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

        .devPic{
			height: 10em;
			border-radius: 50%;
			margin-top: 38px;
			margin-left: 50px;
		    
		   
		 
		

        }
     
 

		.skillBar ul {
			font-family:'Dosis';
			font-size: 22px;
		  list-style-type: none;
		  margin: 0;
		  padding: 0;
		  overflow: hidden;
		  background-color: #F7B733;
		  text-align: center;
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



		.fontawesome {
			font-size: 30px;
			color: #F7B733

		}

		.twitter{
			-webkit-transition: all .5s ease;
			-moz-transition: all 5s ease;
			-ms-transition: all .5s ease;
			-o-transition: all .5s ease;
			transition: all .5s ease;
		}

		.linkedin{
			-webkit-transition: all .5s ease;
			-moz-transition: all 5s ease;
			-ms-transition: all .5s ease;
			-o-transition: all .5s ease;
			transition: all .5s ease;
		}

		.github{
			-webkit-transition: all .5s ease;
			-moz-transition: all 5s ease;
			-ms-transition: all .5s ease;
			-o-transition: all .5s ease;
			transition: all .5s ease;
		}



		.twitter:hover {
			color:#1DA1F2;

		}

		.github:hover {
			color:#7643c9;

		}

		.linkedin:hover {
			color:#000000;

		}


		.Left {
			width:50%;
			display: inline-block;
			text-align:center;
			position:relative;
			margin-left: -200px;
			

		}

		.Right {
			width:50%;
			display: inline-block;
			 vertical-align:top;
			 position:relative;
			 font-family: 'Trebuchet MS', sans-serif;
			font-size: 30px;
			text-align: center;

		}


		.topFont1 {
			position:relative;
			bottom:20px;
		}

		.skills {
			width: 65px;
			height: 65px;
			display: flex;
			margin-left: 155px;
	
			
		}

		.skills embed {
			padding: 15px 10px 10px 10px;
		}
      `}</style>
  </div>
);

export default Header;

 