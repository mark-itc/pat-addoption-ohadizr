import React from 'react'
import logo from '../../assets/Photos/logo 03 standard.png'

export default function UpperNav() {
  return (
    <div className='UpperNav'>
    <h5 className='nakedButton topNavButton'>*search*</h5>
    <img
      src={logo}
      alt='logo'
      className='topNavLogo'
    />
    <h5 className='nakedButton topNavButton '>Profile</h5>
    </div>
  )
}
