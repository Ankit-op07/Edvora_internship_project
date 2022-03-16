import React from 'react'

const BarsIcon = () => {
  return (
      <>
    <svg xmlns="http://www.w3.org/2000/svg" className="barsIcon" fill="none" viewBox="0 0 25 25" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
  </svg>
 
 <style jsx>
     {
         `
            .barsIcon {
                width: 24px;
                height: 24px;
            }
         `
     }
 </style>

  </>
  )
}

export default BarsIcon