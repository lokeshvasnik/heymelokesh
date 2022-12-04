import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
const Footer = () => {
  return (
    <div className="container py-6">
      <div className="box my-5">
        <p>
          Made with ❤️ In React <FaReact size="1.2em" color="#0393D9" fill="#0393D9" /> Firebase <SiFirebase size="1.2em" color="#F2C12A" fill="#F2C12A" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
