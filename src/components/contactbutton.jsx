import React from 'react';

const ContactButton = () => {
  const emailAddress = 'patricia9312@hotmail.es';
  const emailSubject = '';
  const emailBody = '';

  const handleContactClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir el cliente de correo electrónico predeterminado
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-button-container">
      <button onClick={handleContactClick}>Contáctame</button>
    </div>
  );
};

export default ContactButton;
