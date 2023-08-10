import "../styles/Header.css"

function Header({headerInfo}){
    return(
        <div className="HeaderDiv">
            <h2 className="resumeName">{headerInfo.name}</h2>
            <p className="contactInfo">{headerInfo.email} | {headerInfo.number} | {headerInfo.city}</p>
        </div>

    ); 

}

export default Header 