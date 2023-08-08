import React, { useState, useEffect } from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import './ScrollUpButton.css';

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-up-button ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FiArrowUpCircle />
    </div>
  );
}
