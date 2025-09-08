import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Pixell River Financial {year}.</p>
    </footer>
  );
};

export default Footer;
