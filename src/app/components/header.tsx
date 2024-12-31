

function Headersection() {
  return (
    <>
  {/*====================  header area ====================*/}
  <div className="header-area">
    <div className="header-top-bar-info bg-gray d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top-bar-wrap">
              <div className="top-bar-left">
                <div className="top-bar-text">
                  <a href="#" className="font-medium display-inline">
                    Offer Alert:
                  </a>{" "}
                 If are you first time request with us for website any type request <strong>20% Off</strong> as per praposal!
                </div>
              </div>
              <div className="top-bar-right">
                <ul className="top-bar-info">
                  <li className="info-item">
                    <a href="tel:8826070942" className="info-link">
                      <i className="info-icon fa fa-phone" />
                      <span className="info-text">
                        <strong>+91 8826070942</strong>
                      </span>
                    </a>
                  </li>
                  <li className="info-item">
                  <a href="mailto:info@wilatech.com" className="info-link">
                    <i className="info-icon fa fa-envelope" />
                    <span className="info-text">
                    <strong>info@wilatech.com</strong>
                    </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom-wrap header-sticky bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header position-relative">
              {/* brand logo */}
              <div className="header__logo">
                <a href="index.html">
                  <h4>Wilatech.com</h4>
                </a>
              </div>
              <div className="header-right">
                {/* navigation menu */}
                <div className="header__navigation menu-style-three d-none d-xl-block">
                  <nav className="navigation-menu">
                    <ul>
                      <li>
                        <a href={"/"}>Home</a>
                      </li>

                    <li className="has-children has-children--multilevel-submenu">
                        <a href="#">
                          <span>About Company</span>
                        </a>
                        <ul className="submenu">

                        <li>
                            <a href={"/company-overview"}>
                              <span>Company Overview</span>
                            </a>
                          </li>
                          <li>
                            <a href={"/mission-and-vission"}>
                              <span>Mission & Vission</span>
                            </a>
                          </li>
                          <li>
                            <a href={"/why-choose-us"}>
                              <span>Why Choose Us</span>
                            </a>
                          </li>
                          <li>
                            <a href={"/our-experties"}>
                              <span>Our Experties</span>
                            </a>
                          </li>
                          <li>
                            <a href={"/our-team"}>
                              <span>Our Team</span>
                            </a>
                          </li>
                          <li className="has-children">
                            <a href="about-us-01.html">
                              <span>Portfolio</span>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="about-us-01.html">
                                  <span>Website Design</span>
                                </a>
                              </li>
                              <li>
                                <a href="about-us-02.html">
                                  <span>Website Development</span>
                                </a>
                              </li>
                              <li>
                                <a href="about-us-02.html">
                                  <span>Portal Development</span>
                                </a>
                              </li>
                              <li>
                                <a href="about-us-02.html">
                                  <span>Logo Maker</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                    </li>

                    
                    <li className="has-children">
                        <a href="#">
                          <span>Services</span>
                        </a>
                        {/* mega menu */}
                        <ul className="megamenu megamenu--mega">
                          <li>
                            <h2 className="page-list-title">
                            Frontend(UI) Design
                            </h2>
                            <ul>
                              <li>
                                <a href="element-accordion.html">
                                  <span>Web Design</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-box-icon.html">
                                  <span>Mobile Website</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-box-image.html">
                                  <span>Graphic Maker</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-box-large-image.html">
                                  <span>Logo Creator</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-buttons.html">
                                  <span>Custom Web Design</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">
                            Webs/Apps Development
                            </h2>
                            <ul>
                              <li>
                                <a href="element-counters.html">
                                  <span>Web Development</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-dividers.html">
                                  <span>Ecommerce Development</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-flexible-image-slider.html">
                                  <span>Interspire Development</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-google-map.html">
                                  <span>App Development</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-gradation.html">
                                  <span>Software Development</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">
                            Web Portal Service
                            </h2>
                            <ul>
                              <li>
                                <a href="element-popup-video.html">
                                  <span>News Portal</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-pricing-box.html">
                                  <span>Property Portal</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-progress-bar.html">
                                  <span>Classified Portal</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-progress-circle.html">
                                  <span>Matrimonial Portal</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-rows-columns.html">
                                  <span>Financial Portal</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-tabs.html">
                                  <span>Health Portal</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">
                            Graphics
                            </h2>
                            <ul>
                              <li>
                                <a href="element-testimonials.html">
                                  <span>Logo Custome Design</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-timeline.html">
                                  <span>Social Media Banner Design</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-carousel-sliders.html">
                                  <span>Website Banner Design</span>
                                </a>
                              </li>
                              <li>
                                <a href="element-typed-text.html">
                                  <span>Custome Banner Design</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                    </li>

                    <li className="has-children has-children--multilevel-submenu">
                        <a href="#">
                          <span>Products</span>
                        </a>
                        <ul className="submenu">
                            <li>
                            <a href={"/company-overview"}>
                            <span>Billing Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Inventory Management Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>eLearning Module</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Construction Company Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>College ERP Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>DMS Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Doctor Patient Booking</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Mass E-Mail</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>ERP Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Recruitment Software</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>PMS (Project Management System)</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>ERP (Enterprise Resource Planning)</span>
                            </a>
                            </li>
                        </ul>
                    </li>

                    <li className="has-children has-children--multilevel-submenu">
                        <a href="#">
                          <span>Portfolio</span>
                        </a>
                        <ul className="submenu">
                            <li>
                            <a href={"/company-overview"}>
                            <span>Static Website</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Dynamic Website</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Web Portal</span>
                            </a>
                            </li>
                            <li>
                            <a href={"/company-overview"}>
                            <span>Logo Design</span>
                            </a>
                            </li>
                            
                        </ul>
                    </li>
                    
                      <li>
                        <a href="blog-list-large-image.html">
                          <span>Blogs</span>
                        </a>
                      </li>

                      <li><a href="blog-list-large-image.html">
                          Contact Us
                        </a></li>
                    </ul>
                    

                  </nav>
                </div>
                {/* mobile menu */}
                <div
                  className="mobile-navigation-icon d-block d-xl-none"
                  id="mobile-menu-trigger">
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*====================  End of header area  ====================*/}
  
    </>
  )
}

export default Headersection