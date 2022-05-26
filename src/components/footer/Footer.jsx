import React from 'react'
import { CgMusicNote } from 'react-icons/cg'
import './Footer.css'

export function Footer() {
  return (
    <div className='Footer'>
      <div>
      <CgMusicNote className="logo" size={'45'} />
      </div>
      <div className='textFooter'>
        <p>Developed by @Valentina</p>
        <p>2022</p>
      </div>
    </div>
  )
}
