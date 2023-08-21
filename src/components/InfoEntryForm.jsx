import "../styles/InfoEntryForm.css"


function InfoEntryForm({formData, handleEntryChange, handleEntryDelete, handleEntrySave, type}) {
    return (
      <form className="EducationFormContainer" onSubmit={handleEntrySave}>
      { type=='education'? <label>School</label>: <label>Company/Organization</label>} 
      <input className="EducationFormInput" maxLength="50" type="text" id={formData.id} name="title" value={formData.title} onChange={handleEntryChange}required/>
    
      { type=='education'? <label>Degree Completed or in Progress</label>: <label>Role</label>} 
      <input className="EducationFormInput" maxLength="35" type="text" id={formData.id} name="role" value={formData.role} onChange={handleEntryChange}required/>

      <label>City</label>
      <input className="EducationFormInput" maxLength="15"type="text" id={formData.id} name="city" value={formData.city} onChange={handleEntryChange}/>

      <label>Start Date</label>
      <input className="EducationFormInput" type="date" id={formData.id} name="start" value={formData.start} onChange={handleEntryChange}required/>

      <label>End Date</label>
      <input className="EducationFormInput" type="date" id={formData.id} name="end" value={formData.end} onChange={handleEntryChange} required/>

      <label>Brief Description</label>
      <input className="EducationFormInput" maxLength="150" type="location" id={formData.id} name="desc" value={formData.desc} onChange={handleEntryChange} />

      <div className="EducationFormButtonContainer"> 
        
      <button className="deleteEducation" id={formData.id} onClick={handleEntryDelete} type="text">Delete This Entry</button>
      <button className="saveEducation" name="state" onClick={handleEntrySave} value="save" id={formData.id} type="submit">Save This Entry</button>
      </div>
      </form>
  );       
  
}
export default InfoEntryForm
