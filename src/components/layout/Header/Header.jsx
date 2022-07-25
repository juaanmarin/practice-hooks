import React from 'react'
import { DegitalClock } from '../DigitalClock/DigitalClock'

export const Header = ({title="Title"}) => {
  return (

    <header>
        <div className='title-home'>
            <h1>{title}</h1>
        </div>
        <div className='clock'>
            <DegitalClock/>
        </div>
         
    </header>

  )
}
