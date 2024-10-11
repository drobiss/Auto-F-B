// Styles and images import
import dilnaVenku from "../images/dilna-venku.jpg"
import cisteniKlimatizace from "../images/cisteni-klimatizace.jpg"
import dilna from "../images/dilna.jpg"
import "../pages/AboutUs.css"

//React slick import
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//Components
import CtaSection from "../components/CtaSection"
import ContactTable from "../components/ContactTable"

const AboutUs = () => {
  //Settings for slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  }

  return (
    <div className="about-us-container">
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>Auto F&B</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              sequi placeat beatae, cumque quasi deleniti eum quisquam a vel,
              praesentium perferendis laboriosam culpa recusandae labore quia
              eveniet corporis architecto magni?
            </p>
          </div>
          <div className="about-hero-slider">
            <Slider {...settings} className="rounded-slider">
              <div>
                <div className="slide-image-container">
                  <img src={dilnaVenku} alt="Dílna venku" />
                </div>
              </div>
              <div>
                <div className="slide-image-container">
                  <img src={cisteniKlimatizace} alt="Čištění klimatizace" />
                </div>
              </div>
              <div>
                <div className="slide-image-container">
                  <img src={dilna} alt="Dílna" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <ContactTable />

      <div className="about-maps-container">
        <div className="street-view-container">
          <h2>Naše lokalita - Street View</h2>
          <div className="map-frame-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1728289139658!6m8!1m7!1sCAoSLEFGMVFpcE1PRi1reTd2TEZ3WktCWERiUHRuYkozdXNsRnZLUEtwcGtwYUdO!2m2!1d50.09184386279016!2d14.54681038381793!3f268.6799926757812!4f0!5f0.7820865974627469"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="google-maps-container">
          <h2>Naše umístění na mapě</h2>
          <div className="map-frame-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.707182400363!2d14.544054141464567!3d50.09176897164449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b92ca2d13ed7f%3A0x4f6ee8d4699ab880!2sHorusick%C3%A1%20256%2F19%2C%20198%2000%20Praha%2014-Kyje!5e0!3m2!1sen!2scz!4v1728288777079!5m2!1sen!2scz"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <CtaSection/>  
    </div>
  )
}

export default AboutUs