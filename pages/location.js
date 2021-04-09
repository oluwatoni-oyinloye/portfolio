// pages/explore.js
//line spacing for text p tags
import Layout from "../components/Layout";
import Iframe from 'react-iframe'

const location = () => (

        <Layout>

            <div className="grid">
            <div className="card locationPicture">
             
            </div>
          
            <div className="card1 localDonuts">
            <div className="layer">
            <h2 className="donutTitle"> LAURAVILLE </h2>

            <ul className="donutText">
            <li className=""> 4311 HARFORD rd  </li>
            <li className=""> BALTIMORE, MD 21214 </li>



            </ul>

            </div>

            
            </div>
            </div>


         
  
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12343.076887444395!2d-76.5818551558929!3d39.33881386772601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80599788a46a5%3A0x299abd2665d3810!2sCloudy%20Donut%20Co.!5e0!3m2!1sen!2sus!4v1611799735969!5m2!1sen!2sus"
              width= "100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
           



 <style jsx>{` 

         .locationPicture {  
          background-position: center;
          background-image: url(/CDStoreFront.jpeg);
          background-size: 100%;
          
        
        }

        .localDonuts {
          background-position: center;
          background-image: url(/donuts-location-picture.jpg);
          background-size: 50%;
          position: relative;
        }





        .card {
          margin: 0rem;
          height: 500px;
          text-decoration: none;
          width: 50%;
          
          
        
        }


        .card1 {
          
          margin: 0rem;
          height: 500px;
          text-decoration: none;
          width: 50%;
          background-attachment: fixed;


        }


        .donutTitle{
          font-size:75px;
          font-weight:bold;
          color: #fdf5e6;
          font-weight:bold;
          position:absolute;
          font-family:dosis;
          left:13%;
          top:0%;


        
        }

        .donutText{
          font-size:45px;
          font-weight:bold;
          font-family:dosis;
          color:black;
          top:25%;
          left:13%;
          position:absolute;
          list-style-type: none;
          left:7%;
           margin-bottom: 5px;



        }


        .layer{
          background-color: rgba(255, 255, 255, 0.45);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }


        .grid{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;

          }


              a{
              text-decoration: none;
              color: inherit;
               }

               
  `}</style>




    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>





</Layout>



) 
export default location;



	