import { useState } from 'react'
import "../styles/HeaderForm.css"

function HeaderForm({formData, handleChange}) {
 
  return (
    <form className="headerFormContainer">
      <h2 className="headerFormTitle">Personal Information</h2>
      
      <div className="rows">

        <div className="headerRow">
        <label htmlFor="name">Name:</label>
        <input className="headerFormInput" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </div>

        <div className="headerRow">
        <label htmlFor="email">Email:</label>
        <input className="headerFormInput" type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        
        <div className="headerRow">
        <label htmlFor="number">Phone Number:</label>
        <input className="headerFormInput" type="message" id="message" name="number" value={formData.number} onChange={handleChange}/>
        </div>

        <div className="headerRow">
        <label htmlFor="location">Location</label>
        <input className="headerFormInput" type="location" id="location" name="city" value={formData.city} onChange={handleChange}/>
        </div>
        </div>
        
    </form>
  );
  
}


export default HeaderForm