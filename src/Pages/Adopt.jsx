import React from 'react'
import AdoptForm from '.././Components/AdoptPage/AdoptForm'
import '../assets/scss/Adopt.scss'

export default function Adopt() {
  return (

<div className='adoptContainer'>
<div className='adoptHeader'>
<h1>Adopt a Pet</h1>
</div>

    <div className='sideNav'>
    {/* <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">dogs</Button>
      <Button variant="secondary">cats</Button>
    </ButtonGroup> */}
        <AdoptForm/>
    </div>
</div>

   

      );
}
    
