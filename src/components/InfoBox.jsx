
import InfoRow from "./InfoRow"
import SectionHeader from "./SectionHeader"
function InfoBox({education, experience}){
    return(
        <div className="SectionBox">
           <SectionHeader title="Education"/>
           {education.map(ed => <InfoRow key={ed.id} experience={ed}/>)}
           <SectionHeader title="Experience"/>
           {experience.map(ex => <InfoRow key={ex.title} experience={ex}/>)}
        </div>
    );
}
export default InfoBox; 
