import Mobilemenu from "./mobilemenu"


function Footersection() {
  return (
    <>
    {/*====================  footer area ====================*/}
    <div className="footer-area-wrapper black-bg">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper border-bottom">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20 text-white">Wilatech Company</h6>
              <ul className="footer-widget__list">
                <li className="text-white">
                  Noida Uttar Pradesh India
                </li>
                <li>
                  <a
                    href="mailto:info@wilatech.com"
                    className="hover-style-link text-white"
                  >
                    info@wilatech.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8826070942"
                    className="hover-style-link text-white font-weight--bold"
                  >
                    +91 8826070942
                  </a>
                </li>
              </ul>
              <ul className="list ht-social-networks large-icon mt-20">
                <li className="item">
                  <a
                    href="#"
                    target="_blank"
                    aria-label="Facebook"
                    className="social-link hint--bounce hint--top hint--primary text-white"
                  >
                    {" "}
                    <i className="fab fa-facebook social-link-icon" />{" "}
                  </a>
                </li>
                <li className="item">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="ps-0 social-link hint--bounce hint--top hint--primary text-white"
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-twitter social-link-icon" />{" "}
                  </a>
                </li>
                <li className="item">
                  <a
                    href="#"
                    target="_blank"
                    aria-label="Likedin"
                    className="social-link hint--bounce hint--top hint--primary text-white"
                  >
                    {" "}
                    <i className="fab fa-linkedin social-link-icon" />{" "}
                  </a>
                </li>
                <li className="item">
                  <a
                    href="#"
                    target="_blank"
                    aria-label="Instagram"
                    className="social-link hint--bounce hint--top hint--primary text-white"
                  >
                    {" "}
                    <i className="fab fa-instagram social-link-icon" />{" "}
                  </a>
                </li>


              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20 text-white">
                Our Services
              </h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Web Designing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Ecommerce Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    App Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20 text-white">
                Quick links
              </h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Company Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20 text-white">Support</h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Request a praposal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Ticket Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link text-white">
                    Help &amp; FAQ
                  </a>
                </li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30 small-mt__30">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <a href="#">Website Development Company In Noida</a>|
            <a href="#">App Development Company In Noida</a>|
            <a href="#">Web Portal Development Company In Noida</a>|
            <a href="#">Website Design Company In Noida</a>
          </div>
            <div className="col-md-12 text-center">
            <div className="footer-widget__logo mb-30"></div>  
              <span className="copyright-text text-white">
                © 2024 - 2025 Wilatech.{" "}
                <a href="https://hasthemes.com/">All Rights Reserved.</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*====================  End of footer area  ====================*/}

{/*====================  scroll top ====================*/}
<a href="#" className="scroll-top" id="scroll-top">
    <i className="arrow-top fas fa-chevron-up" />
    <i className="arrow-bottom fas fa-chevron-up" />
  </a>
  {/*====================  End of scroll top  ====================*/}

    <Mobilemenu/>
    </>
  )
}

export default Footersection