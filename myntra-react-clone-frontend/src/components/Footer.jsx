const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_coloumn">
          <h3>ONLINE SHOPING</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Cards</a>
          <a href="#">Myntra Insider</a>
          <h3>USEFUL LINKS</h3>
          <a href="#">Blogs</a>
          <a href="#">Carreer</a>
          <a href="#">Site Map</a>
          <a href="#">Corporation Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
        </div>
        <div className="footer_coloumn">
          <h3>CUSTOMER POLICIES</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Term Of Use</a>
          <a href="#">Track Order</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy policy</a>
          <a href="#">Grievance Officer</a>
        </div>
        <div className="footer_coloumn">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="downloadlinks_container">
            <a href="#">
              <img
                className="download_links"
                src="public\images\Google Play.png"
              />
            </a>
            <a href="#">
              <img
                className="download_links"
                src="public\images\App Store.png"
              />
            </a>
            <div className="keepin_touch">KEEP IN TOUCH</div>
            <a href="#">
              <img className="social_icon" src="public\images\facebook.png" />
            </a>
            <a href="#">
              <img className="social_icon" src="public\images\instagram.png" />
            </a>
            <a href="#">
              <img className="social_icon" src="public\images\twitter.png" />
            </a>
            <a href="#">
              <img className="social_icon" src="public\images\youtube.png" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="info_section">
        <div className="contact">
          In case of any concern,
          <a href="#">Contact Us</a>
        </div>
        <div className="copywrite">© 2024 www.myntra.com. All rights reserved.</div>
        <div className="flipkart">
          <a href="#">A Flipkart company</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
