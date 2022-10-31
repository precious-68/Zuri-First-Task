import React from 'react'
import "./Linktreestyles.css"
import ingress from "../Images/I4G.png"

function Footer() {
  return (
    <div className='footer'>
    <div id='footerr'>
    <h1 className='HNG' id='hng'>Zuri<span className=''>
     <svg width="5" height="5" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M4.222 7.88583C5.28881 7.88583 6.2134 7.50658 6.97202 6.74796C7.73064 5.98934 8.13362 5.08848 8.13362 4.02167C8.13362 2.97858 7.73064 2.054 6.97202 1.29538C6.2134 0.536756 5.28881 0.133667 4.222 0.133667C3.10774 0.133667 2.15944 0.513032 1.40082 1.27165C0.642195 2.03027 0.262939 2.95485 0.262939 4.02167C0.262939 5.11221 0.642195 6.01306 1.40082 6.77168C2.15944 7.5303 3.10774 7.88583 4.222 7.88583Z" fill="#E7332B"/>
     </svg>
      </span>Internship</h1>
     <p className='HNG'>HNG Intership 9 Frontend Task</p>
     <img  className="HNG" src={ingress} alt='zuri icon'/>
     
    
    </div>
     
    </div>
  )
}

export default Footer
