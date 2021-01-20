// components/Footer.js

const footerStyle = {
  backgroundColor: "red",
  color: "white",
  width: "100%",
  height: "60px"
};

const Footer = () => (
  <div className="Footer" style={footerStyle}>
    <p className="footerTitle">FOOTER</p>
      <style jsx>{`
        .footerTitle {
    		font-size: 40px;
        }
      `}</style>
  </div>
);

export default Footer;