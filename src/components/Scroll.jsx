import { useState, useEffect } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-10 transition-opacity duration-300 ease-in-out rounded-full bg-orange-500 text-white ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <BiArrowFromBottom className="w-7 h-7" />
    </button>
  );
}

export default ScrollToTopButton;
