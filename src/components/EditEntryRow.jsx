import "../styles/EditEntryRow.css"

export default function EditEntryRow({formData, handleEntryChange}){
    return(
        <div className="editEducationRowContainer">
        <p className="editTitle">{formData.title}</p>
        <button className="editEducationButton" name="state" value="edit" id={formData.id} type="button" onClick={handleEntryChange}>Edit This Entry</button>
        </div>
    )
}