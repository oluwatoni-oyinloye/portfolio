// components/Footer.js
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons

import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons'; 
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faTwitter,
  faInstagram,
  faFacebookF
  )

const footerStyle = {
  backgroundColor: 'black',
  color: "white",
  width: "100%",
  height: "230px" 
}


;

const Footer = () => (

  <div className="Footer" style={footerStyle}>


   <div className="footerMenu">
   <p className="contact">  CONTACT US <br /> <br /> <span> (443) 885-9052  <br /> <a href="mailto:info@homemaidbrunch.com"> info@homemaidbrunch.com </a> </span> </p>
   <p className="adress">  ADDRESS <br /> <br /> <span> 4311 Harford Rd <br />   Baltimore, MD 21214 </span> </p>
   <p className="hours">  HOURS <br /> <br /> <span> Friday  10AM–3PM <br /> 
Saturday  10AM–3PM <br />
Sunday  10AM–3PM </span> </p>
   </div>


 <ul className = "fontawesome" >
   <li>

   <a href = "https://www.instagram.com/cloudy_donuts/?hl=en">
  <FontAwesomeIcon icon={faInstagram} />
  </a>
  </li>
   
   <li>
   <a href ="https://www.facebook.com/CloudyDonutCo/"> 
  <FontAwesomeIcon icon={faFacebookF} />
  </a>
  </li>
  
  <li>
  <a href= "https://twitter.com/homemaidbrunch">
  <FontAwesomeIcon icon={faTwitter} />
  </a>
  </li>
  </ul>
 



   
    <p  className= 'cc'> © 2021 React.JS/Next.JS by Matthew Hood & Oluwatoni Oyinloye  </p>
    <p className="footerTitle"> </p>

      <style jsx>{`
        .footerTitle {
    		font-size: 20px;
        },
        

        .Footer{
          text-align:center;
         

    

}

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



      .footerMenu{
        padding:20px 0px 0px 0px;
        display:flex;
        justify-content:center;
        font-family:'Dosis';


      }

      .footerMenu p{
        flex: 1;

      }
     .footerMenu p span {
  
      text-align:left !important;


     }

     .footerMenu p span a{
      color: white;
     }


    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-align:center;
      display: flex;
      justify-content:center;
      
    }

    li {
      float: center;
      text-align:center;
      padding: 5px 10px;
    }

    li a {
      font-size: 20px;
      display: inline-block;
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 0px;
    text-decoration: none;
    text-align: center;
    color: #fff;
    font-weight: normal;
    line-height: 30px;
    border-radius: 27px;
    -moz-border-radius:27px;
    -webkit-border-radius:27px;
    background-color: white;
    color:black;



    }

    .cc{
      padding-bottom: 5px;
      padding-top: 5px;
      font-size: 12px;
      font-family:'Dosis';
    }



      `}</style>
  </div>
);

export default Footer;