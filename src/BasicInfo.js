import React from 'react';

const BasicInfo = ({ name, number, dateOfBirth }) => (
  <div>
    <h3>Name: {name}</h3>
    <p>Number: {number}</p>
    <p>Date of Birth: {dateOfBirth}</p>
  </div>
);

export default BasicInfo;
