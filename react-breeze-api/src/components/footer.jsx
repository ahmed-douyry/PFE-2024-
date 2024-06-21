import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <img
                src={'/logo.png'}
                alt="University Logo"
                className="img-fluid w-100 mt-3"
                style={{ maxWidth: '200px' }}
              />
              <div className="mt-3 ml-[40px]">
                <a
                  href="https://www.facebook.com/bouznika.ista"
                  className="text-blue-800 me-3 fs-4"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  className="text-red-600 me-3 fs-4"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://plus.google.com"
                  className="text-orange-500 fs-4"
                >
                  <i className="bi bi-google"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <h3
                className="h5 mb-3"
                style={{ borderBottom: '2px solid white' }}
              >
                PAGE FACEBOOK
              </h3>
              <img
                src={'/facebook.jpg'}
                alt="Facebook Page"
                className="img-fluid mb-2"
              />
              <a
                href="https://www.facebook.com/bouznika.ista"
                className="text-primary"
              >
                Follow Page
              </a>
            </div>
            <div className="col-md-3 mb-4">
              <h3
                className="h5 mb-3"
                style={{ borderBottom: '2px solid white' }}
              >
                LOCALISATION
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.094621444701!2d-7.1625226!3d33.7947875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7a66a166cfcb9%3A0xaa4fa1f68b05bceb!2sISTA%20-%20OFPPT%20-%20BOUZNIKA!5e0!3m2!1sen!2sma!4v1622395825626!5m2!1sen!2sma"
                width="100%"
                height="200"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ISTA - OFPPT - BOUZNIKA"
              ></iframe>
            </div>
            <div className="col-md-3 mb-4">
              <h3
                className="h5 mb-3"
                style={{ borderBottom: '2px solid white' }}
              >
                CONTACT
              </h3>
              <address className="text-center">
                Avenue ZONE INDESTRUIELE , B.P 745,
                <br />
                <br />
                13100, Maroc.
                <br />
                <br />
                Tél: (+212) 537774377
                <br />
                <br />
                Fax: (+212) 537774377
              </address>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black text-center text-white py-2">
        <span>
          ISTA - OFPPT - BOUZNIKA - B.P 745, Poste Principale 13100 - Bouznika
          - Maroc - Tél: (+212) 537774377 - copyright ©
        </span>
      </div>
    </>
  );
};

export default Footer;