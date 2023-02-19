import React, { useState, useEffect } from 'react';
import './InputStyle.css';

function Input({ onAddApplication }) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [isValid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const application = { companyName: company, role, status };
    onAddApplication(application);
    setCompany('');
    setRole('');
    setStatus('');
  };
  const validate = () => {
    return company.length & role.length & status.length;
  }
  useEffect(() => {
    isValid = validate();
    setValid(isValid);
  },[fname, lname]);

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Google!' />
        </label>
        <label>
          Role:
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder='SWE!' />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Submitted!' />
        </label>
        <div className='submitButton'>
          <button disabled = {!isValid} type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Input;
