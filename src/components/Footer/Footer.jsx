import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-center py-4 shadow-inner mt-10">
      <p className="text-sm text-white dark:text-gray-300">
        &copy; {new Date().getFullYear()} The Book Haven. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
