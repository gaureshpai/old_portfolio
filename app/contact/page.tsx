import React from 'react'

const page = () => {
  return (
    <div>

      <div className="content">
        <div className="contact-info">
          <div className="section-title">Contact Details</div>
          <div className="info">
            <div className='linec'>
              <span className="a1">Email:</span>
              <span >paigauresh@gmail.com</span>
            </div>
            <div className='linec'>
              <span className="a1">Phone:</span>
              <span >8861621934</span>
            </div>
            <div className='linec'>
              <span className="a1">Age:</span>
              <span >19</span>
            </div>
            <div className='linec'>
              <span className="a1">Date of Birth:</span>
              <span >17/01/2004</span>
            </div>
          </div>
        </div>
        <a className="website_link" href="https://www.instagram.com/hseruag/" target="_blank" >Instagram</a>
        <a className="website_link" href="https://www.youtube.com/@hseruag" target="_blank" >Youtube</a>
        <a className="website_link" href="https://twitter.com/hseruag" target="_blank" >Twitter/X</a>
        <a className="website_link" href="https://www.linkedin.com/in/gaureshpai" target="_blank" >Linkedin</a>
      </div>

    </div>
  )
}

export default page