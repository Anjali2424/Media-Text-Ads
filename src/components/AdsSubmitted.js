// AdsSubmitted.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdsSubmitted = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/create-ad');
    }, 600);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'green'}}>Ads Submitted..</h2>
      {/* Add any content or message for ads submitted */}
    </div>
  );
};

export default AdsSubmitted;
