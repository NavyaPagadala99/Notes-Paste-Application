//In this Slice file, four core functions of pastes are defined
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

//Defining intial state from local storage with key "pastes"
const initialState = {
  pastes:localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")):[]
}


export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {

   //Reducer function for creating paste
   addToPastes: (state,action) => {
      const paste = action.payload;

      //validating whether paste already exists or not
      const alreadyExists = state.pastes.find((p)=> p.title === paste.title)
      if(alreadyExists){
        toast.error("Paste with the title already exists",{duration:1000});
        return;
      }

      //adding pastes in paste and local storage if the validation is passed 
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));

      //displaying toast success message
      toast.success("Paste created successfully",{
        duration:1000
      });
    },

    //Reducer function for updating paste
    updateToPastes: (state,action) => {
     const paste = action.payload;

     //Finding the index of the paste in pastes array
     const index = state.pastes.findIndex((item)=> item._id === paste._id);
     if(index>=0){

      //updating the pastes array with the paste
       state.pastes[index] = paste;
       localStorage.setItem("pastes",JSON.stringify(state.pastes));

       //displaying the toast success message
       toast.success("Pasted updates successfully",{
        duration:1000
       });
     }
    },

    //Reducer function for deleting paste
    deleteFromPastes: (state, action) => {
      const pasteId = action.payload;

      //Finding the index of the paste in pastes array
      const index = state.pastes.findIndex((item)=>item._id === pasteId);
      if(index>=0){

        //Deleting the paste from pastes array and local storage
        state.pastes.splice(index,1);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success("Paste deleted successfully",{
          duration:1000
        });
      }
    },

    //reducer function to reset the paste's title and content after creating and updating
    resetAllPastes:(state,action)=>{
      state.pastes=[];
      localStorage.removeItem("pastes");
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes,deleteFromPastes, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer