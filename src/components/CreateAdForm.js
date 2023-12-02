import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreatAdForm = () => {
    const navigate = useNavigate();
    const [textAd, setTextAd] = useState(false);
    const [mediaAd, setMediaAd] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isChecked1, setChecked1] = useState(false);


    const handleCheckboxChange = (adType) => {
        if (adType === 'text') {
            setTextAd((prev) => !prev);
            setChecked(!isChecked);
        } else if (adType === 'media') {
            setMediaAd((prev) => !prev);
            setChecked1(!isChecked1);
        }
    };

    const data = {
        textAd,
          mediaAd,
    }

      const handleContinue = () => {
        // Redirect to the Fill Data page with selected ad types
        console.log('text file', mediaAd);
        navigate('/fill-data', {
          state : data
        });
      };

    const handleImageClick = () => {
        setChecked(!isChecked);
        setTextAd(!textAd)

    };
    const handleImageClick1 = () => {
        setChecked1(!isChecked1);
        setMediaAd(!mediaAd)

    };


    return (
        <>
            <h2 className='ads-heading'>Creat Ads</h2>
            <div className="ads-flexbox">
                <div class="ad-container" onClick={handleImageClick} role='presentation'>
                    <div className='checkbox-container'>
                    <input
                        type="checkbox"
                        checked={textAd || isChecked}
                        onChange={() => handleCheckboxChange('text')}
                    />
                    </div>
                    <img class="ad-image"
                        onClick={handleImageClick}
                        src="https://user-images.githubusercontent.com/6730148/118689050-7d118680-b7bb-11eb-9b8a-bb53a0b225d2.png" alt="Ad Image" />
                    <h2 className='ads-image-header'>

                        <span className='text-ads-span'>Text Ad</span>
                    </h2>
                    <div className="checkbox-overlay" role='presentation' onClick={handleCheckboxChange}></div>
                </div>

                <div class="ad-container" onClick={handleImageClick1} role='presentation'>
                   <div className='checkbox-container1'>
                   <input
                        type="checkbox"
                        checked={mediaAd || isChecked1}
                        onChange={() => handleCheckboxChange('media')}
                    />
                   </div>
                    <img class="ad-image1"
                        onClick={handleImageClick1}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5crVjt1zKLCPZywz1TLbU99ZVDcbjh29uQ" alt="Ad Image" />
                    <h2 className='ads-image-header'>
                    <span className='text-ads-span'> Media Ad </span>
                    </h2>
                    <div className="checkbox-overlay" role='presentation' onClick={handleCheckboxChange}></div>

                </div>


            </div>
        <div className='btn-flex'>
        <button
            className={!(textAd || mediaAd) ? 'disabledButtonStyle' : 'continue-btn'}
              onClick={handleContinue}
            >Next</button>
        </div>
           
        </>
    );
};


export default CreatAdForm;
