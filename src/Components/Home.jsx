//Home page consiting of UI and creation of paste
import React, { useEffect, useState } from 'react'
import './Home.css'
import { FaRegCopy } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../features/pasteSlice';
import toast from 'react-hot-toast';
function Home() {

  //hook to create and set title of the paste
  const [title,setTitle] = useState('')

  //hook to create and set content of the paste
  const [content,setContent] = useState('')

  //hook to render and set paste id
  const [searchParams,setSearchParams] = useSearchParams();

  const pasteId = searchParams.get('pasteId')

  //hook to dispatch the actions
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);
 
  useEffect(()=>{
     if(pasteId){
      const paste = allPastes.find((p)=>p._id===pasteId);
      setTitle(paste.title);
      setContent(paste.content);
     }
  },[pasteId])

  //Function to create paste
  function createPaste(){

    //creating paste object
    const paste={
      title:title,
      content:content,
      _id:pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }
 
    //pateId aslready exists then dispatching update reducer
    if(pasteId){
      dispatch(updateToPastes(paste));
    }

    //else dispatching add reducer
    else{
      dispatch(addToPastes(paste));
    }

    //resetting the title,content and id of paste after creation or updation
    setTitle('');
    setContent('');
    setSearchParams({});
  }
  
  return (
    <div className='home-container'>
      <div className="head-part">
        <input type="text" className='input-field' placeholder='Title..' value={title} 
        onChange={(e)=>setTitle(e.target.value)} />

        <button className='paste-button'  onClick={createPaste} disabled={!title || !content}>
          {
            pasteId?"Update My Paste":"Create My Paste"
          }
        </button>
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
           <button onClick={()=>{navigator.clipboard.writeText(content);toast.success("copied to clipboard",{duration:1000})}}><FaRegCopy/></button>
           </div>
           </div>
           <textarea name="content-box" id="content-box"  placeholder='Write your content here..'
             value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        </div>
      </div>
  )
}

export default Home
