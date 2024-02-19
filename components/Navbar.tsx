import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='topbar'>
      <div className="menu">
        <Link href="/"                className='menu_button'>Introduction or About Me</Link>
        <Link href="/EducationInfo"   className='menu_button'>Education Info</Link>
        <Link href="/Skills"          className='menu_button'>Skills</Link>
        <Link href="/Projects"        className='menu_button'>Projects</Link>
        <Link href="/Certifications"  className='menu_button'>Certifications and Courses</Link>
        <Link href="/ContactInfo"     className='menu_button'>Get in touch</Link>
      </div>
    </div>
  );
};

export default Navbar;
