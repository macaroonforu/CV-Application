import "../styles/Objective.css"
import SectionHeader from "./SectionHeader"

function Objective({content}){
    return(
        <div className="Objective">
            <SectionHeader title={content.title}/>
            <p className="p">{content.description}</p>
        </div>

    );
}
export default Objective 