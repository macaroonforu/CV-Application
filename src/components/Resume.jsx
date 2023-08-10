import "../styles/Resume.css"
import InfoBox from "./InfoBox"
import Objective from "./Objective"
import Header from "./Header"

function Resume({headerInfo, ObjectiveInfo, Education, Experience}){
    return (
        <div className="resumeContainer">
            <Header headerInfo={headerInfo}/>
            <Objective content={ObjectiveInfo}/>
            <InfoBox education={Education} experience={Experience} />
        </div>
    ); 
}

export default Resume 