import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  const content = (
    <footer className='public__footer'>
      <Link to='#'>
        Done for GeoPol by <span className='nowrap'>RobertCAA</span>
      </Link>
    </footer>
  );
  return content;
};

export default Footer;
