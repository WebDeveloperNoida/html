import Footersection from "./components/footer";
import Headersection from "./components/header";

export default function Home() {
  return (
  <>
  <Headersection/>
  <div id="main-wrapper">
    <div className="site-wrapper-reveal">
      {/*============ Infotechno Hero Start ============*/}
      <div className="processing-hero processing-hero-bg">
        <div className="container">
          <div className="row align-items-center">
            {/*baseline*/}
            <div className="col-lg-8 col-md-7">
              <div className="processing-hero-text wow move-up">
                <h6>IT Software and design </h6>
                <h1 className="font-weight--reguler mb-15">
                  Virtual technology in a{" "}
                  <span className="text-color-secondary">
                    Refined IT System
                  </span>
                </h1>
                <p>
                  Set the trends for desktop &amp; server virtualization
                  technologys
                </p>
                <div className="hero-button mt-30">
                  <a href="#" className="btn btn--secondary">
                    Free Sample
                  </a>
                  <div className="hero-popup-video video-popup">
                    <a
                      href="https://www.youtube.com/watch?v=vqZuSUtczbU"
                      className="video-link"
                    >
                      <div className="video-content">
                        <div className="video-play">
                          <span className="video-play-icon">
                            <i className="fa fa-play" />
                          </span>
                        </div>
                        <div className="video-text"> How we work</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="processing-hero-images-wrap wow move-up">
                <div className="processing-hero-images">
                  <img
                    className="img-fluid"
                    src="assets/images/hero/slider-processing-slide-01-image-01.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============ Infotechno Hero End ============*/}
      {/*====================  Accordion area ====================*/}
      <div className="accordion-wrapper section-space--ptb_100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-wrapper faq-custom-col">
                <div className="section-title section-space--mb_40">
                  <h6 className="section-sub-title mb-20">Our company</h6>
                  <h3 className="heading">
                    Share the joy of achieving{" "}
                    <span className="text-color-primary">
                      {" "}
                      glorious moments
                    </span>{" "}
                    &amp; climbed up the top.
                  </h3>
                </div>
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How can we help your business?{" "}
                          <span>
                            {" "}
                            <i className="fas fa-chevron-down" />
                            <i className="fas fa-chevron-up" />{" "}
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Through the collaboration with customers in discussing
                          needs and demand, we're able to attain mutual
                          understanding, gain customer trust to offer
                          appropriate advice, and bring about suggestions on
                          suitable technology to transform your business.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What are the advantages of Wilatech?
                          <span>
                            {" "}
                            <i className="fas fa-chevron-down" />
                            <i className="fas fa-chevron-up" />{" "}
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                        Wilatech takes into consideration every little detail to
                          make sure the system run smoothly and responsively.
                          Wilatech employs a new technique called Minified
                          Technology for securing customers' database &amp;
                          building up highly confidential firewalls.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How working process is simplified?{" "}
                          <span>
                            {" "}
                            <i className="fas fa-chevron-down" />
                            <i className="fas fa-chevron-up" />{" "}
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          We reduce redundant complex calculations and lengthy
                          erroneous code texts with simpler ones to ensure
                          Wilatech would run seamlessly and the design is reserved
                          in its best form when viewed from a wide range of
                          mobile devices &amp; browsers.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-service-wrap">
                <div className="contact-title text-center section-space--mb_40">
                  <h3 className="mb-10">Need a hand?</h3>
                  <p className="text">
                    Reach out to the world’s most reliable IT services.
                  </p>
                </div>
                
                <form
                  className="contact-form"
                  id="contact-form-2"
                  action=""
                  method="post"
                >
                  <div className="contact-form__two">
                    <div className="contact-input">
                      <div className="contact-inner">
                        <input
                          name="con_name"
                          type="text"
                          placeholder="Name *"
                        />
                      </div>
                      <div className="contact-inner">
                        <input
                          name="con_email"
                          type="email"
                          placeholder="Email *"
                        />
                      </div>
                    </div>
                    <div className="contact-select">
                      <div className="form-item contact-inner">
                        <span className="inquiry">
                          <select id="Visiting" name="Visiting">
                            <option>
                              Select Department to email
                            </option>
                            <option value="Your inquiry about">
                              Your inquiry about
                            </option>
                            <option value="General Information Request">
                              General Information Request
                            </option>
                            <option value="Partner Relations">
                              Partner Relations
                            </option>
                            <option value="Careers">Careers</option>
                            <option value="Software Licencing">
                              Software Licencing
                            </option>
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className="contact-inner contact-message">
                      <textarea
                        name="con_message"
                        placeholder="Please describe what you need."
                        defaultValue={""}
                      />
                    </div>
                    <div className="comment-submit-btn">
                      <button className="ht-btn ht-btn-md" type="submit">
                        Send message
                      </button>
                      <p className="form-messege-2" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  Accordion area  ====================*/}
      {/*===========  feature-images-wrapper  Start =============*/}
      <div className="feature-images-wrapper bg-gray section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* section-title-wrap Start */}
              <div className="section-title-wrap text-center section-space--mb_10">
                <h6 className="section-sub-title mb-20">Our services</h6>
                <h3 className="heading">
                  For your very specific industry, <br /> we have{" "}
                  <span className="text-color-primary">
                    {" "}
                    highly-tailored IT solutions.
                  </span>
                </h3>
              </div>
              {/* section-title-wrap Start */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-images__two small-mt__10">
                <div className="modern-grid-image-box row row--30">
                  <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60  small-mt__40">
                    {/* ht-box-icon Start */}
                    <a href="#" className="ht-box-images style-02">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img
                            className="img-fulid"
                            src="assets/images/icons/mitech-processing-service-image-01-80x83.webp"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6 className="heading">Backup and recovery </h6>
                        </div>
                      </div>
                    </a>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                    {/* ht-box-icon Start */}
                    <a href="#" className="ht-box-images style-02">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img
                            className="img-fulid"
                            src="assets/images/icons/mitech-processing-service-image-02-80x83.webp"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6 className="heading">Cloud Managed Services</h6>
                        </div>
                      </div>
                    </a>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                    {/* ht-box-icon Start */}
                    <a href="#" className="ht-box-images style-02">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img
                            className="img-fulid"
                            src="assets/images/icons/mitech-processing-service-image-03-80x83.webp"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6 className="heading">
                            IT Security &amp; Compliance
                          </h6>
                        </div>
                      </div>
                    </a>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                    {/* ht-box-icon Start */}
                    <a href="#" className="ht-box-images style-02">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img
                            className="img-fulid"
                            src="assets/images/icons/mitech-processing-service-image-04-80x83.webp"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6 className="heading">Software Development</h6>
                        </div>
                      </div>
                    </a>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                    {/* ht-box-icon Start */}
                    <a href="#" className="ht-box-images style-02">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img
                            className="img-fulid"
                            src="assets/images/icons/mitech-processing-service-image-05-80x83.webp"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6 className="heading">Managed IT Services</h6>
                        </div>
                      </div>
                    </a>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                    {/* ht-box-icon Start */}
                    <a href="#" className="ht-box-images style-02">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img
                            className="img-fulid"
                            src="assets/images/icons/mitech-processing-service-image-06-80x83.webp"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6 className="heading">IT consultancy</h6>
                        </div>
                      </div>
                    </a>
                    {/* ht-box-icon End */}
                  </div>
                </div>
              </div>
              <div className="section-under-heading text-center section-space--mt_60">
                Challenges are just opportunities in disguise.{" "}
                <a href="#">Take the challenge!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===========  feature-images-wrapper  End =============*/}
      <div className="gradation-process-area section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gradation-title-wrapper section-space--mb_60">
                <div className="gradation-title-wrap ">
                  <h6 className="section-sub-title text-black mb-20">
                    How we works
                  </h6>
                  <h4 className="heading">
                    How it helps{" "}
                    <span className="text-color-primary">
                      your <br /> business succeed
                    </span>
                  </h4>
                </div>
                <div className="gradation-sub-heading">
                  <h3 className="heading">
                    <mark>04</mark> Steps
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ht-gradation style-01">
                {/* Single item gradation Start */}
                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInRight"
                  }}
                >
                  <div className="line" />
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1" />
                      <div className="wave-pulse wave-pulse-2" />
                      <div className="wave-pulse wave-pulse-3" />
                    </div>
                    <h6 className="circle">1</h6>
                  </div>
                  <div className="content-wrap">
                    <h6 className="heading">01. Discussion</h6>
                    <div className="text">
                      We meet customers in set place to discuss the details
                      about needs and demands before proposing a plan.
                    </div>
                    <a className="gradation-btn" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more{" "}
                      </span>
                      <span className="button-icon fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Single item gradation End */}
                {/* Single item gradation Start */}
                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.15s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.15s",
                    animationName: "fadeInRight"
                  }}
                >
                  <div className="line" />
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1" />
                      <div className="wave-pulse wave-pulse-2" />
                      <div className="wave-pulse wave-pulse-3" />
                    </div>
                    <h6 className="circle">2</h6>
                  </div>
                  <div className="content-wrap">
                    <h6 className="heading">02. Concepts &amp; Initatives</h6>
                    <div className="text">
                      Our experts come up with all kinds of ideas and
                      initiatives for delivering the best solutions for IT
                      services chosen.
                    </div>
                    <a className="gradation-btn" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more{" "}
                      </span>
                      <span className="button-icon fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Single item gradation End */}
                {/* Single item gradation Start */}
                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.20s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInRight"
                  }}
                >
                  <div className="line" />
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1" />
                      <div className="wave-pulse wave-pulse-2" />
                      <div className="wave-pulse wave-pulse-3" />
                    </div>
                    <h6 className="circle">3</h6>
                  </div>
                  <div className="content-wrap">
                    <h6 className="heading">03. Testing &amp; Trying</h6>
                    <div className="text">
                      After agreeing on the ideas and plans, we will conduct as
                      scheduled and give comments on the results &amp;
                      adaptations.
                    </div>
                    <a className="gradation-btn" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more{" "}
                      </span>
                      <span className="button-icon fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Single item gradation End */}
                {/* Single item gradation Start */}
                <div
                  className="item item-1 animate wow fadeInRight"
                  data-wow-delay="0.25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.25s",
                    animationName: "fadeInRight"
                  }}
                >
                  <div className="line" />
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1" />
                      <div className="wave-pulse wave-pulse-2" />
                      <div className="wave-pulse wave-pulse-3" />
                    </div>
                    <h6 className="circle">4</h6>
                  </div>
                  <div className="content-wrap">
                    <h6 className="heading">04. Execute &amp; install</h6>
                    <div className="text">
                      Once the final plan is approved, everything will be
                      conducted according to the agreed contract.
                    </div>
                    <a className="gradation-btn" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more{" "}
                      </span>
                      <span className="button-icon fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Single item gradation End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="technology-service-area technology-service-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title section-space--pt_60">
                <p className="text-white font-weight--bold">OUR TECHNOLOGY</p>
                <h3 className="text-white">
                  <span className="text-color-secondary">Wilatech</span> – Top
                  Software Development Technology
                </h3>
                <p className="text-infos text-white mt-30">
                  Our strong passion to modern tech trends and best practices
                  drive in the development of top-notch solutions that are
                  perfectly tailored to provide high quality and affordable
                  software outsourcing solutions to growing startup and
                  enterprise companies in the world.
                </p>
                <div className="single-button-group">
                  <div className="button-group-wrap mt-30">
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      ASP. NET Core
                    </a>
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      REACT JS
                    </a>
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      ANGULAR
                    </a>
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      PHP
                    </a>
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      JAVA
                    </a>
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      PYTHON
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image section-space--pt_60">
                <img
                  src="assets/images/banners/soft-s5-img.webp"
                  className="img-fluid"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  testimonial section ====================*/}
      <div className="testimonial-slider-area bg-gray section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
                <h6 className="section-sub-title mb-20">Testimonials</h6>
                <h3 className="heading">
                  What do people praise about{" "}
                  <span className="text-color-primary"> Wilatech?</span>
                </h3>
              </div>
              <div className="testimonial-slider">
                <div className="swiper-container testimonial-slider__container">
                  <div className="swiper-wrapper testimonial-slider__wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img
                              src="assets/images/testimonial/mitech-testimonial-avata-02-90x90.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Abbie Ferguson</h6>
                              <span className="designation">Marketing</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">
                          I’ve been working with over 35 IT companies on more
                          than 200 projects of our company, but @Wilatech is one
                          of the most impressive to me.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img
                              src="assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Monica Blews</h6>
                              <span className="designation">Web designer</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">
                          I’ve been working with over 35 IT companies on more
                          than 200 projects of our company, but @Wilatech is one
                          of the most impressive to me.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img
                              src="assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Abbie Ferguson</h6>
                              <span className="designation">WEB DESIGNER</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">
                          I’ve been working with over 35 IT companies on more
                          than 200 projects of our company, but @Wilatech is one
                          of the most impressive to me.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img
                              src="assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Abbie Ferguson</h6>
                              <span className="designation">WEB DESIGNER</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">
                          I’ve been working with over 35 IT companies on more
                          than 200 projects of our company, but @Wilatech is one
                          of the most impressive to me.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of testimonial section  ====================*/}
      <div className="blog-section-wrapper section-space--pt_100  section-space--pb_70">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 wow move-up animated"
              style={{ visibility: "visible" }}
            >
              <div className="section-title section-title tablet-mb__60 section-space--mb_30 tablet-mt__0 small-mt__0 small-mb__60 mt-30">
                <h6 className="section-sub-title mb-20">Blogs &amp; news</h6>
                <h3 className="heading">
                  Interesting articles
                  <span className="text-color-primary"> updated daily</span>
                </h3>
                <ul className="infotechno-blog-list mt-30">
                  <li>
                    <a href="#">Ideas for High Returns on Investment</a>
                  </li>
                  <li>
                    <a href="#">
                      How Technology Made Businesses More Efficient
                    </a>
                  </li>
                  <li>
                    <a href="#">Data Secure on Transitioning to a New Office</a>
                  </li>
                  <li>
                    <a href="#">The Keys to Persuading Customers Nowadays</a>
                  </li>
                  <li>
                    <a href="#">
                      Blockchain Technology Effects on Logistics Sector?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow move-up animated"
              style={{ visibility: "visible" }}
            >
              {/*======= Single Blog Item Start ========*/}
              <div className="single-blog-item blog-grid">
                {/* Post Feature Start */}
                <div className="post-feature blog-thumbnail">
                  <a href="blog-post-layout-one.html">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-03-370x230.webp"
                      alt="Blog Images"
                    />
                  </a>
                </div>
                {/* Post Feature End */}
                {/* Post info Start */}
                <div className="post-info lg-blog-post-info">
                  <div className="post-meta">
                    <div className="post-date">
                      <span className="far fa-calendar meta-icon" />
                      February 28, 2019
                    </div>
                  </div>
                  <h5 className="post-title font-weight--bold">
                    <a href="#">
                      5 Ways Technology Has Improved Business Today
                    </a>
                  </h5>
                  <div className="post-excerpt mt-15">
                    <p>
                      They play a role in making operations more seamless,
                      bridging the gap between authorities, consumers and
                      businesses. …
                    </p>
                  </div>
                  <div className="btn-text">
                    <a href="#">
                      Read more{" "}
                      <i className="ml-1 button-icon fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Post info End */}
              </div>
              {/*===== Single Blog Item End =========*/}
            </div>
            <div
              className="col-lg-4 col-md-6 wow move-up animated"
              style={{ visibility: "visible" }}
            >
              {/*======= Single Blog Item Start ========*/}
              <div className="single-blog-item blog-grid">
                {/* Post Feature Start */}
                <div className="post-feature blog-thumbnail">
                  <a href="blog-post-layout-one.html">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-02-370x230.webp"
                      alt="Blog Images"
                    />
                  </a>
                </div>
                {/* Post Feature End */}
                {/* Post info Start */}
                <div className="post-info lg-blog-post-info">
                  <div className="post-meta">
                    <div className="post-date">
                      <span className="far fa-calendar meta-icon" />
                      February 28, 2019
                    </div>
                  </div>
                  <h5 className="post-title font-weight--bold">
                    <a href="#">How Wireless Technology is Changing Business</a>
                  </h5>
                  <div className="post-excerpt mt-15">
                    <p>
                      It is far wiser to do your own installations and ensure
                      that all data flowing through the organization has
                      end-to-end encryption. …
                    </p>
                  </div>
                  <div className="btn-text">
                    <a href="#">
                      Read more{" "}
                      <i className="ml-1 button-icon fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Post info End */}
              </div>
              {/*===== Single Blog Item End =========*/}
            </div>
          </div>
        </div>
      </div>
      <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="cta-content md-text-center">
                <h3 className="heading">
                Connect with Wilatech – 
                  <span className="text-color-primary">Innovating solutions, empowering your future today!</span>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="cta-button-group--two text-center">
                <a href="#" className="btn btn--white btn-one">
                  <span className="btn-icon me-2">
                    <i className="fa fa-phone" />
                  </span>
                  +91 8826070942
                </a>
                <a href="#" className="btn btn--secondary btn-two ">
                  <span className="btn-icon me-2">
                    <i className="fa fa-envelope" />
                  </span>{" "}
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <Footersection/>
   
</>
  );
}
