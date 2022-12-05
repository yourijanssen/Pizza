import React from 'react'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram /> <Twitter /> <Facebook /> <LinkedIn />
         </div>
        <p> &copy; 2022 Youripizza.nl</p>
    </div>
  )
}

export default Footer