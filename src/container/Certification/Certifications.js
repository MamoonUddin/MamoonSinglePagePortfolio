import React, { useState, useEffect } from 'react';
import './Certifications.css';
import { certificatesData } from '../../assets/data/Certification';

export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? certificatesData.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === certificatesData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section id="certificates" className="uk-margin-small-left uk-margin-small-right uk-margin-xlarge-top uk-margin-xlarge-bottom">
      <h1 className="uk-margin-xlarge-left uk-light"> Certificates</h1>
      <div className="certifications">
        <div className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </div>
        <div className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </div>
        {certificatesData.map((certification, index) => (
          
          <div
            key={index}
            className={`certification-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${certification.Image})` }}
          >
            <a href={certification.Link} target="_blank" rel="noopener noreferrer">
            <div className="certification-content">
              <h3 className="certification-title">{certification.Name}</h3>
            </div>
            </a>
          </div>
          
        ))}
      </div>
    </section>
  );
}
