import logo from './LionCoinToken.png';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('Email: ');
  const [firstName, setFirstName] = useState('First Name: ');
  const [emailOpacity, setEmailOpacity] = useState(0.5);
  const [firstNameOpacity, setFirstNameOpacity] = useState(0.5);
  const [submittedData, setSubmittedData] = useState({ email: 'example@email.com', firstName: 'please input' });
  const [showEditButton, setShowEditButton] = useState(false);

  useEffect(() => {
    console.log('Component Mounted.');
  }, []);

  const submitData = (evt) => {
    evt.preventDefault();
    console.log("Form submit.");
    setSubmittedData({ email, firstName });
    setShowEditButton(true);
    document.querySelectorAll('.input-data p').forEach(p => p.style.textAlign = 'center');
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
    setEmailOpacity(1);
    setSubmittedData((prevData) => ({ ...prevData, email: evt.target.value }));
    setShowEditButton(true);
  };

  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
    setFirstNameOpacity(1);
    setSubmittedData((prevData) => ({ ...prevData, firstName: evt.target.value }));
    setShowEditButton(true);
  };

  const handleEmailFocus = () => {
    setEmail('');
    setEmailOpacity(1);
  };

  const handleFirstNameFocus = () => {
    setFirstName('');
    setFirstNameOpacity(1);
  };

  const reset = () => {
    setEmail('email@example.com');
    setFirstName('Name');
    setEmailOpacity(0.5);
    setFirstNameOpacity(0.5);
    setSubmittedData({ email: 'example@email.com', firstName: 'First name' });
    setShowEditButton(false);
  };

  return (
    <div className="App">
      <img src={logo} alt="logo" style={{ width: '50px', height: '50px', padding: '1rem' }} />
      <form className="centered-form">
        <label>
          First Name: 
          <input type="text" value={firstName} onChange={handleFirstNameChange} onFocus={handleFirstNameFocus} style={{ fontWeight: 'bold', opacity: firstNameOpacity, textAlign: 'center' }} />
        </label>
        <label>
          Email:
          <input type='email' value={email} onChange={handleEmailChange} onFocus={handleEmailFocus} style={{ fontWeight:'bold', opacity: emailOpacity, textAlign: 'center' }} />
        </label>
        <button onClick={submitData}>
          Submit Form Data 
        </button>
      </form>
      <h2>Building a Basic Form</h2> 
      <div 
        className="container" 
        style={{ 
          border: '1px solid black', 
          padding: '30px', 
          marginTop: '20px', 
          width: '35%', 
          margin: '0 auto', 
          borderRadius: '10px', 
          position: 'relative', 
        }}>
        {showEditButton && (
          <button 
            onClick={reset} 
            style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '10px' 
            }}>
              Reset
          </button>
        )}
        <div 
          className='input-data' 
          style={{ 
            textAlign: 'center', 
            width: '100%' 
          }}>
          <h3>First Name:</h3>
          <p>{submittedData.firstName}</p>
          <h3>Email:</h3>
          <p>{submittedData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
