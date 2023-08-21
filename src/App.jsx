import { useState } from 'react'
import Resume from "./components/Resume"
import HeaderForm from "./components/HeaderForm"
import ObjectiveForm from "./components/ObjectiveForm"
import SectionPkg from "./components/SectionPkg"
import { v4 as uuid} from 'uuid';
import * as Person from './example.json'
import "./styles/App.css"


function App() {

  const [headerInfo, setheaderInfo] = useState(Person.headerInfo);
  const [Objective, setObjective] = useState(Person.Objective);
  const handlePersonalInfoChange = (event) => {
    event.preventDefault(); 
    setheaderInfo((headerInfo) => ({ ...headerInfo, [event.target.name]: event.target.value}));
  };
  function handleObjectiveChange(event) {
    event.preventDefault(); 
    setObjective({...Objective, title: event.target.name, description: event.target.value});
  }

  //Initializing The State 
  const [ExperienceArray, setExperienceArray] = useState(Person.Experience.map((Experience) => { return { ...Experience, id: uuid()}})); 
  const [EducationArray, setEducationArray] = useState(Person.Education.map((Education) => {return {...Education, id: uuid()}}));

  //Adding an Education or Experience to the Resume 
  const handleNewEd = (event) => {
    event.preventDefault(); 
    setEducationArray([...EducationArray, {state: 'edit', id: uuid(), title: "", role: "", desc: "", city: "", start: "", end: ""}]); 
  }
   const handleNewEx = (event) => {
    event.preventDefault(); 
    setExperienceArray([...ExperienceArray, {state: 'edit', id: uuid(), title: "", role: "", desc: "", city: "", start: "", end: ""}])
  }

  //Handle Updating a Experience or Education 
    const handleExChange = (event) => {
    const newExperienceArray = ExperienceArray.map((Experience) => {
      if (Experience.id === event.target.id){
        return {...Experience, [event.target.name]: event.target.value}; 
      }
      console.log(Experience); 
      return Experience; 
    }); 
    setExperienceArray(newExperienceArray); 
  }
  const  handleEdChange = (event) =>{
    const newEducationArray= EducationArray.map((Education) => {
      if (Education.id === event.target.id) {
        return {...Education, [event.target.name]: event.target.value}; 
      }
      console.log(Education); 
      return Education; 
    }); 
    setEducationArray(newEducationArray); 
  }

//Handling a Save 
const handleExSave = (event) => {
    event.preventDefault(); 
    console.log(event); 
    const newExperienceArray = ExperienceArray.map((Experience) => {
      const Savebutton = event.target;  
      console.log(Savebutton); 
      if(Experience.id === Savebutton.id){
        return {...Experience, [Savebutton.name]: Savebutton.value}; 
      }
      return Experience; 
    }); 
    setExperienceArray(newExperienceArray); 
  }
  const handleEdSave = (event) => {
    event.preventDefault(); 
    const newEducationArray= EducationArray.map((Education) => {
      const Savebutton = event.target[7];
      if (Education.id === Savebutton.id) {
        return {...Education, [Savebutton.name]: Savebutton.value}; 
      }
      return Education; 
    }); 
    setEducationArray(newEducationArray); 
  }

  //Deleting an Education or Experience 
   const handleEdDelete = (event) => {
    setEducationArray(EducationArray.filter(Education =>Education.id !== event.target.id)); 
  }
  const handleExDelete = (event) => {
    setExperienceArray(ExperienceArray.filter(Experience => Experience.id != event.target.id)); 
  }

  

  const loadResume = (event) => {
    event.preventDefault(); 
    setheaderInfo(Person.headerInfo); 
    setObjective(Person.Objective); 
    setEducationArray(Person.Education.map((Education) => {return {...Education, id: uuid()}})); 
    setExperienceArray(Person.Experience.map((Experience) => { return { ...Experience, id: uuid()}})); 
  }
  
  const clearResume = (event) => {
    event.preventDefault(); 
    setheaderInfo({name: "",email: "",number: "", city: ""}); 
    setObjective({title: "Objective", description: ""}); 
    setEducationArray([]); 
    setExperienceArray([]); 
  }

  return(
    <div>
    <h1>CV Maker</h1>
    <button onClick = {loadResume}>Load Example Resume</button>
    <button onClick = {clearResume}>Clear The Resume</button>
    <div className="mainContainer">

    <div className="forms">
      <HeaderForm formData={headerInfo} handleChange={handlePersonalInfoChange}/>
      <ObjectiveForm ObjectiveData={Objective} handleODChange={handleObjectiveChange}/>

      <div className="bigEntries">
      <SectionPkg AddEntry={handleNewEd} UpdateEntry={handleEdChange} Information={EducationArray} DeleteEntry={handleEdDelete} SaveEntry={handleEdSave} type='education'/>
      <SectionPkg AddEntry={handleNewEx} UpdateEntry={handleExChange} Information={ExperienceArray} DeleteEntry={handleExDelete} SaveEntry={handleExSave} type='experience'/>
      </div>
   
    </div>
    
    <div className="resume">
    <Resume headerInfo={headerInfo} ObjectiveInfo={Objective} Education={EducationArray} Experience={ExperienceArray} />

    </div>
    
   
    </div>


    </div>
  );
}

export default App

