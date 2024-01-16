import "../styles/SectionPkg.css"
import InfoEntryForm from "./InfoEntryForm";
import EditEntryRow from "./EditEntryRow"; 

import { useState } from 'react'
import { v4 as uuid} from 'uuid';


function SectionPkg({Information, AddEntry, UpdateEntry, DeleteEntry, SaveEntry, type}) {

  const [editing, setEditing] = useState(false); 
  const [visible, setVisible] = useState(true); 

  const addEntry = (e) => {
    setEditing(true); 
    AddEntry(e); 
  }

  const deleteEntry = (e) => {
    setEditing(false); 
    DeleteEntry(e); 
  }

  const saveEntry = (e) => {
    setEditing(false); 
    console.log(e); 
    SaveEntry(e); 
  }

  const editEntry = (e)=>{
    setEditing(true); 
    UpdateEntry(e); 
  }

  return (
         <div className={type==='education'?"EducationPkgdiv": "ExperiencePkgdiv"}>
        {type ==='education'?  <h2>Education</h2>: <h2>Experience</h2>}
        <div className="listContainer">
        <ul className="educationList">
          {
            Information.map((info) => { 
              if (editing===true){
                if(info.state ==='edit'){
                  //setVisible(false);
                  //setEditing(false); 
                  return <li className="edForm" key={info.id}><InfoEntryForm formData={info} handleEntryChange={editEntry} handleEntryDelete={deleteEntry} handleEntrySave={saveEntry} type={type}/></li>
                }  
              }
              else{
                //setVisible(true); 
                return  <li className="svForm" key={info.id}><EditEntryRow formData={info} handleEntryChange={editEntry}/></li> 
              }
           })
        }
        </ul>
        
        </div>
        {!editing && <button className="addButton" onClick={addEntry}>Add a New {type==='education' ? 'Education': 'Experience'}</button>}
    </div>
  );
}

        
export default SectionPkg

//


