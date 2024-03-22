import { useEffect, useState } from "react";
import "./Footer.model.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRefresh, faWater } from "@fortawesome/free-solid-svg-icons";


function Footer({onChange}:any) {
    const [currentPage, changePage] = useState<number>(1);
    useEffect(()=>
    {
        onChange(currentPage);
    },[currentPage])
	return (
		<footer>
			<div className="nav-options" onClick={()=>changePage(1)} style={currentPage == 1?{backgroundColor:'rgba(119, 0, 255, 0.208)',borderRadius:100}:{backgroundColor:"transparent"}}>
                <FontAwesomeIcon icon={faHome} className="nav-icons"></FontAwesomeIcon>
				<h3>Home</h3>
			</div>
			<div className="nav-options" onClick={()=>changePage(2)}  style={currentPage == 2?{backgroundColor:'rgba(119, 0, 255, 0.208)',borderRadius:100}:{backgroundColor:"transparent"}}>
			<FontAwesomeIcon icon={faWater} className="nav-icons"></FontAwesomeIcon>
				<h3>Manual refuel</h3>
			</div>
			<div className="nav-options" onClick={()=>changePage(3)}  style={currentPage == 3?{backgroundColor:'rgba(119, 0, 255, 0.208)',borderRadius:100}:{backgroundColor:"transparent"}}>
			<FontAwesomeIcon icon={faRefresh} className="nav-icons"></FontAwesomeIcon>
				<h3>Automatic refuel</h3>
			</div>
		</footer>
	);
}

export default Footer;
