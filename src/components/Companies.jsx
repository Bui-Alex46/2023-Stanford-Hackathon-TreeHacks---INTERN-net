import React from 'react';

function Companies({ companies }) {
  return (
    <ul>
      {companies.map((company, index) => (
        <li key={index}>
          Company: {company.companyName}, Role: {company.role}, Status: {company.status}
        </li>
      ))}
    </ul>
  );
}

export default Companies;
