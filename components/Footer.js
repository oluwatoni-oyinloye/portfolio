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
  backgroundColor: '#242323',
  color: "white",
  width: "100%",
  height: "230px" 
}


;

const Footer = () => (

  <div className="Footer" style={footerStyle}>


   <div className="footerMenu">
  
   </div>





   
    <p  className= 'cc'> © 2021 React.JS/Next.JS by Oluwatoni Oyinloye </p>

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
      font-size: 12px;
      font-family:'Dosis';
    }



      `}</style>
  </div>
);

export default Footer;