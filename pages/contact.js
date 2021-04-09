import Layout from "../components/Layout";

const contact = () =>


          <Layout>


          <div className="container">
          <div className="left">
          <div className="text">
         


           <div className="contactText">
            
             <h2 className="title"> CONTACT US </h2>	
            <p className="phone">  443.885.9052  </p>
            <a href= "mailto:info@homemaidbrunch.com"> info@homemaidbrunch.com</a>

            <p> FRI :           6pm - 9pm </p>
            <p> SAT :           9am - 8pm </p>
            <p> SUN :           9am - 8pm </p>
           
           




          


            </div>
            </div>
            </div>


            <div className="right">
   
            
            <img className="contactPic" src="/contactD1.png"/>
            <img className="contactPic" src="/contactD2.png"/>
            <img className="contactPic" src="/contactD3.png"/>
            <br/> 
            <img className="contactPic" src="/contactD4.png"/> 
            <img className="contactPic" src="/contactD5.png"/>
            <img className="contactPic" src="/contactD7.png"/>
       
            

      
            </div> 
            </div>           



         




      <style jsx>{`


      	.title{
      		font-size:40px;



   

      		
      	}

      	a{
      		color:black;
      	}


      	.phone{
      		text-decoration:underline;
      	}


      


          .container{
          	padding:5px 100px;
          	margin:5px 100px;
       
            

          }


          .card {
          

          height: 500px;
          text-decoration: none;
          width: 60%;
    




     


        }

        .left {
        	width:50%;
        	 display: inline-block;

        	

        }

        .right {
        	width:50%;
        	 display: inline-block;
        	  vertical-align:top;
        	  position:relative;
        }

          .contactPic{  
         
          height: 33%;
          width:33%;
          background-repeat:no-repeat;


     

          
         }


         .topLocationPicture{
         	width:span;
         	height:100px;
         	background-image:url(/contact-donuts.jpg);

         }



        .contactText{
        	 list-style-type:none;
        	 font-size:20px;
        	 font-family:dosis;

        	

        	
        }








      	      `}</style>




    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>

      	       </Layout>










export default contact;