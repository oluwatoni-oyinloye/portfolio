
import Layout from "../components/Layout";
import Carousel from "../components/Carousel"
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons

import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons'; 

const Index = () => (
  <Layout>

    <Carousel />

    <div className="container">

      <main>
        <div className="grid">

          <a className="card DonutCard1">
            <h3 className="DonutTitle">VEGAN</h3>
            <p className="DonutText"></p>
          </a>

          <a className="card DonutCard2">
            <h3 className="DonutTitle">HANDMADE</h3>
            <p className="DonutText"></p>
          </a>

          <a className="card DonutCard3">
            <h3 className="DonutTitle">SMALL BATCH</h3>
            <p className="DonutText"></p>
          </a>

          <a className="card DonutCard4">
            <h3 className="DonutTitle">FOUR DOLLARS</h3>
            <p className="DonutText"></p>
          </a>

        </div>
      </main> 

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

      * {
        font-family:'Dosis';
      }

        .container {
          min-height: 100vh;
          max-width: 1500px;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1300px;
          margin: 1rem 0;
        }

        .DonutTitle {
          position: absolute;
          color: black;
          top: 30%;
          left: 10%;
          font-size: 40px;
          font-weight: bold;
        }

        .DonutText {
          position: absolute;
          color: black;
          top: 40%;
          left: 12%;
          font-size: 22px;
        }

        .DonutCard1 {
          background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(/donutCard1.jpg);
          background-position: center;
          background-size: cover;

        }

        .DonutCard2 {
          background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(/donutCard2.jpg);
          background-position: top;
          background-size: cover;
        }

        .DonutCard3 {
          background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(/donutCard3.jpg);
          background-position: center;
          background-size: cover;
        }

        .DonutCard4 {
          background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(/donutCard4.jpg);
          background-position: bottom;
          background-size: cover;
        }

        .card {
          margin: .25rem;
          width: 525px;
          height: 525px;
          flex-basis: 45%;
          padding: .25rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 0px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {

        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  </Layout>
  );

  export default Index;