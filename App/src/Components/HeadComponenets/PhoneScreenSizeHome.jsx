import React from 'react'
import TopMessage from './TopMessage'
import LowerNavPhone from './LowerNavPhone'
import logo from '../../assets/Photos/onlydoglogo.png'

export default function PhoneScreenSizeHome() {
  return (
    <div className='headContainer'>
    <div className='TopMessage'> 
    <TopMessage/>
    </div>

    <div className='CombinedNav'>
    <div className='UpperNav'>
    <h5 className='nakedButton topNavButton '>Profile</h5>
    <h5 className='nakedButton topNavButton'>*search*</h5>
    <img
      src={logo}
      alt='phone logo'
      className='phoneLogo'
    />
    <h5 className='nakedButton topNavButton '>Profile</h5>
    

      {<LowerNavPhone/>}
      </div>
      </div>
    </div>
  )
}
