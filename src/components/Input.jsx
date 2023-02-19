import React, { useState, useEffect } from 'react';
import './InputStyle.css';

function Input({ onAddApplication }) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [isValid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
    const isValid = validate();
    setValid(isValid);
  },[company, role, status]);

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" value={company} onChange={(event) => setCompany(event.target.value)} placeholder='Google!' />
        </label>
        <label>
          Role:
          <input type="text" value={role} onChange={(event) => setRole(event.target.value)} placeholder='SWE!' />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(event) => setStatus(event.target.value)} placeholder='Submitted!' />
        </label>
        <div className='submitButton'>
          <button disabled = {!isValid} type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Input;
