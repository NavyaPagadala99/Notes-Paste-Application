//View Paste file consists of display of pastes
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ViewPaste.css'
import { FaRegCopy } from "react-icons/fa";
import { useParams } from 'react-router-dom';

function ViewPaste() {
  
  const {id} = useParams();

  const allPastes = useSelector((state)=>state.paste.pastes);

  const paste = allPastes.filter((p)=> p._id === id)[0]
  return (
    <div className='view-container'>
      <div className="view-head-part">
      <input type="text" className='input-field' placeholder='Title..' value={paste.title} 
        onChange={(e)=>setTitle(e.target.value)} disabled/>
      </div>
      <div className="paste-part">
        <div className='copy-part'> 
          <div className="circles">
          <div className='red-circle'>
          </div>
          <div className='yellow-circle'>
          </div>
          <div className='green-circle'>
          </div>
          </div>
           <div className='copy-symbol'>
           <button><FaRegCopy/></button>
           </div>
           </div>
           <textarea name="content-box" id="content-box"  placeholder='Write your content here..'
             value={paste.content} onChange={(e)=>setContent(e.target.value)} disabled></textarea>
      </div>
      </div>
  )
}

export default ViewPaste
