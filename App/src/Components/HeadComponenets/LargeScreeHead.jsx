import React from 'react'
import TopMessage from './TopMessage'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'

export default function LargeScreeHead() {
  return (
    <div className='headContainer'>
    <div className='TopMessage'> 
    <TopMessage/>
    </div>

    <div className='UpperNav'>
            <UpperNav/>
    </div>
    <hr className='hr_standard'/>

    <div className='LowerNav'>
      {<LowerNav/>}
      </div>
    </div>
  )
}
