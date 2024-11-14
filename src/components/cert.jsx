import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './cert.css';
import companyLogo009 from './image/C2.jpg'; // Adjust the path as needed

const CertificateGenerator = () => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePrint = () => {
    const certificate = document.getElementById('certificate');
    const scale = 2; // Adjust this value for higher resolution

    html2canvas(certificate, { scale }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png', 1.0); // Use the highest quality setting
      link.download = 'certificate.png';
      link.click();
    });
  };

  return (
    <div className="container8">
      <div>
        <div className="certificate-form8">
          <label className='lab'>
            Enter your name for the certificate:
            <input type="text" value={name} onChange={handleNameChange} required className='inp'/>
          </label>
          <button onClick={handlePrint} className="ntb">Download Certificate</button>
        </div>
        {name && (
          <div id="certificate" className="certificate8">
            <h2 className="kaam">{name}</h2>
            <img src={companyLogo009} alt="Company Logo8" className="c"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;
