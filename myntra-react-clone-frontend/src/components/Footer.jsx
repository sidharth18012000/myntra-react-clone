const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Cards</a>
          <a href="#">Myntra Insider</a>

          <h3>USEFUL LINKS</h3>

          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Map</a>
          <a href="#">Corporate Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
          <a href="#">Myntra Insider</a>
        </div>
        <div className="footer_column">
          <h3>CUSTOMER POLICIES</h3>

          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy policy</a>
          <a href="#">Grievance Redressal</a>
        </div>
        <div className="footer_column">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>

          <div className="download_links">
            <a href="#">
              <img src="images\Google Play.png" />
            </a>
            <a href="#">
              <img src="images\App Store.png" />
            </a>
          </div>

          <h3>KEEP IN TOUCH</h3>

          <div className="social_media">
            <a href="#">
              <img src="images\facebook.png" />
            </a>
            <a href="#">
              <img src="images\twitter.png" />
            </a>
            <a href="#">
              <img src="images\youtube.png" />
            </a>
            <a href="#">
              <img src="images\instagram.png" />
            </a>
          </div>
        </div>

        <div className="desktop_main">
          <div className="desktop_section">
            <div className="desktop_original">
              <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
            </div>
            <div>
              <strong> 100% ORIGINAL </strong>
              <span>
                guarantee for
                <pre>all products at myntra.com</pre>
              </span>
            </div>
          </div>

          <div className="desktop_section">
            <div className="desktop_return">
              <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" />
            </div>
            <div>
              <strong> Return within 14days </strong>
              <span>
                of
                <pre>receiving your order</pre>
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="info_section">
        <div className="contact">
          In case of any concern,
          <a href="#"> Contact Us </a>
        </div>
        <div className="copyright">
          © 2024 www.myntra.com. All rights reserved.
        </div>
        <div className="flipcart">
          <a href="#">A Flipkart company</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
