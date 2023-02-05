import React from 'react'
import { useNavigate } from "react-router-dom";

export default function LowerNav() {
  const navigate = useNavigate();
  return (
    <div className='LowerNav'>
    <button className='nakedButton' onClick={() => navigate('/')}>HOME</button>
    <button className='nakedButton' onClick={() => navigate('/adopt')}>ADOPT</button>
    <button className='nakedButton' onClick={() => navigate('/about')}>ABOUT</button>
    <button className='nakedButton' onClick={() => navigate('/community')}>COMMUNITY</button>
    <button className='nakedButton' onClick={() => navigate('/contact')}>CONTACT</button>
    <button className='nakedButton' onClick={() => navigate('/support')}>SUPPORT</button>
    </div>
  )
}
