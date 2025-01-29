// import logo from './logo.png';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('Email: ');
  const [firstName, setFirstName] = useState('First Name: ');
  const [emailOpacity, setEmailOpacity] = useState(0.5);
  const [firstNameOpacity, setFirstNameOpacity] = useState(0.5);
  const [submittedData, setSubmittedData] = useState({ email: 'Email: ', firstName: 'First Name: ' });
  const [showEditButton, setShowEditButton] = useState(false);
  console.log('Email: ', email);
  console.log('First Name: ', firstName);

  useEffect(() => {
    console.log('Component Mounted.');
  }, []);

  const submitData = (evt) => {
    evt.preventDefault();
    console.log("Form submit.");
    console.log("Email: ", email);
    console.log("First Name: ", firstName);
    setSubmittedData({ email, firstName });
    setShowEditButton(true);
    document.querySelectorAll('.input-data p').forEach(p => p.style.textAlign = 'center');
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
    setEmailOpacity(1);
    setSubmittedData((prevData) => ({ ...prevData, email: evt.target.value }));
  };

  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
    setFirstNameOpacity(1);
    setSubmittedData((prevData) => ({ ...prevData, firstName: evt.target.value }));
  };

  const handleEmailFocus = () => {
    setEmail('');
    setEmailOpacity(1);
  };

  const handleFirstNameFocus = () => {
    setFirstName('');
    setFirstNameOpacity(1);
  };

  const editData = () => {
    setEmail(submittedData.email);
    setFirstName(submittedData.firstName);
    setEmailOpacity(1);
    setFirstNameOpacity(1);
    setShowEditButton(false);
  };

  return (
    <div className="App">
      Building A Basic Form
      <form className="centered-form">
        <label>
          First Name: 
          <input type="text" value={firstName} onChange={handleFirstNameChange} onFocus={handleFirstNameFocus} style={{ fontWeight: 'bold', opacity: firstNameOpacity }} />
        </label>
        <label>
          Email:
          <input type='email' value={email} onChange={handleEmailChange} onFocus={handleEmailFocus} style={{ fontWeight:'bold', opacity: emailOpacity }} />
        </label>
        <button onClick={submitData}>
          Submit Form Data 
        </button>
      </form>
      <h2>{firstName.charAt(0).toUpperCase() + firstName.slice(1)}<br />{email.charAt(0).toUpperCase() + email.slice(1)}</h2> 
      <div className="container" style={{ border: '1px solid black', padding: '30px', marginTop: '20px', width: '35%', margin: '0 auto', borderRadius: '10px', position: 'relative' }}>
        {showEditButton && (
          <button onClick={editData} style={{ position: 'absolute', top: '10px', right: '10px' }}>Edit</button>
        )}
        <div className='input-data' style={{ textAlign: 'left', width: '100%' }}>
          <h3>Submitted Data:</h3>
          <p>FName: {submittedData.firstName}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
