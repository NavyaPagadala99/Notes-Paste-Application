//Paste page that handles seaqrch,edit, view, copy and delete functionalities
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import editIcon from '../assets/pen-to-square-solid-full.svg'
import deleteIcon from '../assets/icons8-delete-button.svg'
import viewIcon from '../assets/eye-regular-full.svg'
import copyIcon from '../assets/copy-regular-full.svg'
import ViewPaste from './ViewPaste';
import './Pastes.css'
import { deleteFromPastes } from '../features/pasteSlice';
import toast from 'react-hot-toast';

function Pastes() {
  const pastes = useSelector((state)=>state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTitle,setSearchTitle] = useState('');
  const filteredTitle = pastes.filter((paste)=>
    paste.title.toLowerCase().includes(searchTitle.toLowerCase()));

  //function to handle deletion of pastes
  function handleDelete(pasteId){
    dispatch(deleteFromPastes(pasteId));
  }

  function formatDate(pasteDate){
     const date = new Date(pasteDate);
     return String(date.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }));
  }
  return (
    <div className ='view-container'>
      <input type="text" value={searchTitle} placeholder='Search Title here' className='search-title'
      onChange={(e)=>setSearchTitle(e.target.value)} />
      <div className="heading-part">
          All Pastes
      </div>
      <div className="content-pastes">
        {
          filteredTitle.length >0 && filteredTitle.map((paste)=>{
            return(
            <div className='content'>
              <div className='paste'>
                <div className="paste-content">
                  <h1 className='paste-title'>{paste.title}</h1>
                  <br/>
                  {paste.content}
                </div>
                <div className='button-options'>
                 <div className="button-operations">
                   <div className='buttons'>

                    <button><a href={`/?pasteId=${paste?._id}`} >
                    <img src={editIcon} alt="edit" width='20' height='20' /></a></button>

                    <button onClick={
                      ()=>handleDelete(paste?._id)}>
                        <img src={deleteIcon} alt="delete" width='20' height='20' /></button>

                    <button><a href={`/pastes/${paste?._id}`} >
                    <img src={viewIcon} alt="view" width='20' height='20'/></a></button>

                   <button onClick={
                    ()=>{navigator.clipboard.writeText(paste?.content); toast.success("copied to clipboard",{duration:1000})}}>
                      <img src={copyIcon} alt="copy" width='20' height='20' /></button>
                   </div>

                   <div className="date" >
                   {formatDate(paste.createdAt)}
                </div>
                </div>
              </div>
              </div>

            </div>
            );
          }
        )
      }
      </div>
    </div>
  )
}

export default Pastes
