import React, { useEffect } from 'react'

const GoogleAdsResponsive = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])
  return (
    <ins
      className="adsbygoogle -customize"
      style={{
        display: 'block',
        overflow: 'hidden'
      }}
      data-ad-client="ca-pub-5532061638278565"
      data-ad-slot="8076291715"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default GoogleAdsResponsive
