import "../styles/ObjectiveForm.css"

function ObjectiveForm({ObjectiveData, handleODChange}){
    return(
        <form className="ObjectiveFormContainer">
            <h2 className="ObjectiveFormTitle">Objective</h2>
            <textarea className="ObjectiveFormText" maxLength="150" type="text" id="description" name="Objective" value={ObjectiveData.description} onChange={handleODChange}/>
        </form>
    ); 
}

export default ObjectiveForm 