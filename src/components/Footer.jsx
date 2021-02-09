import React from 'react';

const date = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright &#169; {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
