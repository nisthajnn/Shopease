import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
const Announce = () => {
    const[ann,setann]=useState('bg-[#8ed1da] font-bold text-black flex items-center justify-center')
    const handleClose=()=>
    {
        setann(ann+ " hidden")
    }
  return (
    <div className={ann}>
        <h1>Get your hands on exclusive discounts today</h1>
        <CloseIcon className='cursor-pointer font-bold text-black' onClick={handleClose} />
    </div>
  )
}

export default Announce