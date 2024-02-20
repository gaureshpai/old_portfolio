import React from 'react'
import Link from 'next/link'

const education = () => {
  return (
    <div className = "containerc">
      <br/>
      <br />
      <br />
      <br />
      <div className='contactInfo'>
        <h2>Education</h2>
        <div className='School'>

          <h3>Schooling</h3>
          <p>School: SVS Vidyagiri</p>
          <p>Location: Bantwal, Karnataka</p>
          <p>Passing Year: 2020</p>
          <p>Percenatge score: 96.96%</p>
          <Link className="link" 
          href="https://schools.org.in/dakshina-kannada/29240108307/svs-english-medium-high-school-vidyagiri-bantwal.html" 
          target="_blank">More about the school
          </Link>
        </div>
        
        <div className='PUC'>
          <h3>Pre-University Course (PUC)</h3>
          <p>College: Aloysius Pre-University College</p>
          <p>Location: Mangaluru, Karnataka</p>
          <p>Passing Year: 2022</p>
          <p>Stream: Science</p>
          <p>Percenatge score: 96%</p>
          <Link className="link"
            href="https://staloysiuspuc.in/index.aspx#popup1"
            target="_blank">More about PUC
          </Link>
        </div>

        <div className='Engineering'>
          <h3>Bachelor of Engineering in Computer Science</h3>
          <p>College: AJIET (affiliated to VTU Belagavi)</p>
          <p>Location: Mangaluru, Karnataka</p>
          <p>Graduation Date: June 2026(Expected)</p>
          <p><Link className="link"
            href="https://staloysiuspuc.in/index.aspx#popup1"
            target="_blank">More about College
          </Link></p>
          <p><Link className="link"
            href="https://vtu.ac.in/"
            target="_blank">More about University
          </Link></p>
        </div>

      </div>
    </div>

  )
}

export default education

// Bachelor of Science in Computer Science
// University: XYZ University
// Graduation Date: May 2023(Expected)
// GPA: 3.8 / 4.0

// Relevant Coursework:

// Data Structures and Algorithms
// Database Management Systems
// Object - Oriented Programming
// Web Development
// Software Engineering