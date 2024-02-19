'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div>
      <ul className="menu">
        <li><a href="/introduction">Introduction</a></li>
        <li><a href="/education">Education Info</a></li>
        <li><a href="/prestud">Present Study Status</a></li>
        <li><a href="/cert">Certificates</a></li>
        <li><a href="/Ratethewebsite">Rate the Website</a></li>
        <li><a href="/Suggestions">Suggestions</a></li>
        <li><a href="/contact">Contact Details</a></li>
      </ul>
    </div>
  )
}

export default Navbar