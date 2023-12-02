import React, { useState } from 'react';
import AdsSubmitted from './AdsSubmitted';
import { useNavigate } from 'react-router-dom';

const CreateText = () => {
  const [formData, setFormData] = useState({
    heading1: '',
    description: '',
    heading2: '',
    businessName: '',
    buttonLabel: '',
    selectOption: 'Option 1', // Default option
    websiteUrl: '',
  });
  const [flag, setFlag] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form Data:', formData);
    setFlag(true)
  };

  const handleBackBtn = () => {
    navigate('/create-ad')
  }

  return (
    <>
      {
        flag ? <AdsSubmitted /> :
          <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
              <div style={formSectionStyle}>
                <label htmlFor="heading1">Heading 01</label>
                <input
                  type="text"
                  id="heading1"
                  name="heading1"
                  value={formData.heading1}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder='Add a heading that would make users interested'
                  required
                />
              </div>

              <div style={formSectionStyle}>
                <label htmlFor="description">Description 01</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={textareaStyle}
                  placeholder='Add description about your products'
                  required
                ></textarea>
              </div>

              <div style={formSectionStyle}>
                <label htmlFor="heading2">Heading 02</label>
                <input
                  type="text"
                  id="heading2"
                  name="heading2"
                  value={formData.heading2}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                  placeholder='Add a heading that would make users interested'

                />
              </div>

              <div style={formSectionStyle}>
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                  placeholder='Add your business name'
                />
              </div>

              <div style={formSectionStyle}>
                <label htmlFor="buttonLabel">Button Label</label>
                <input
                  type="text"
                  id="buttonLabel"
                  name="buttonLabel"
                  value={formData.buttonLabel}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                  placeholder='Select a label'
                />
              </div>

              <div style={formSectionStyle}>
                <label htmlFor="selectOption">Select Option:</label>
                <select
                  id="selectOption"
                  name="selectOption"
                  value={formData.selectOption}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>

              <div style={formSectionStyle}>
                <label htmlFor="websiteUrl">Website URL</label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                  placeholder='Add the URL'
                />
              </div>

                <div>
                <button onClick={handleBackBtn} style={buttonStyle}>
                  Back
                </button>
                <button type="submit" style={buttonStyle1}>
                  Submit
                </button>
                </div>
            </form>
          </div>

      }
    </>
  );
};

const formSectionStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  marginBottom: '8px',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  marginBottom: '8px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  // border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: '350px',
  width: '100px'
};
const buttonStyle1 = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  // border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: '50px',
  width: '100px'
};

export default CreateText;
