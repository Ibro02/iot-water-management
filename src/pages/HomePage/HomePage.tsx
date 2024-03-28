import Button from "../../components/Button/Button";
import "./HomePage.model.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function HomePage() {
	const deviceName = "NODEMCU3886";
	const [settingsIsOpen, setSettingsStatus] = useState<boolean>(false);
	return (
		<div className="home-page">
			<h1>Welcome back!</h1>
			<h1>CONNECTED TO: {deviceName}</h1>
			{/* <Button backgroundColor="gray" color="white">Change pool/aquarium</Button> */}
			<Button
				backgroundColor="white"
				color="darkblue"
				onClick={() => setSettingsStatus(true)}
			>
				<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
				Manage settings
			</Button>
			{/* <Login/> */}
			{settingsIsOpen && (
				<div className="popup-window">
					<div className="settings-box">
					<h2>Settings</h2>
						<div className="settings-input">
              <div className="input">
							<h3>Max depth:</h3>
							<input
								type="number"
								id="quantity"
								name="quantity"
                aria-disabled={true}
								min="1"
								max="200"
                value={7}
                />
							<span>cm</span>
						</div>
                </div>
				</div>
            <div className="save-cancel-buttons">
						<Button backgroundColor="#ffff" onClick={() => setSettingsStatus(false)} color="#7700ff">Cancel</Button>
						<Button backgroundColor="#7700ff" color="#ffff">Save</Button>
            </div>
					</div>
			)}
		</div>
	);
}

export default HomePage;
