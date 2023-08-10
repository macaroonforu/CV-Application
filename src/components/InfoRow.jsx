import "../styles/InfoRow.css"
function InfoRow({experience}){
    return(
        <div>
            <div className="gridContainer">
                <p className="IRTitle">{experience.title}</p>
                <p className="IRRole">{experience.role}</p>
                <p className="IRLoc">{experience.city}</p>
                <p className="IRDate">{experience.start} - {experience.end}</p>
            </div>
            <div>
                <p className="IRDesc">{experience.desc}</p>
            </div>
        </div>
    );

}
export default InfoRow