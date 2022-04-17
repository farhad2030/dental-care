import React from "react";

const Footer = () => {
  var today = new Date();
  console.log(today.getFullYear());
  return <div className="py-4"> &#169; Copyright {today.getFullYear()}</div>;
};

export default Footer;
