import "../styles/SectionHeader.css"

function SectionHeader({title}){
    return(
        <div className="headerContainer">
            <h2 className="IRSectionTitle">{title}</h2>
            <hr className="IRSectionUnderline"/>
        </div>
    );
}

export default SectionHeader