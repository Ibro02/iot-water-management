import Button from "../../components/Button/Button";
import './HomePage.model.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


function HomePage() {
    const deviceName = "NODEMCU3886";
  return <div className="home-page">
    <h1>Welcome back!</h1>
    <h1>CONNECTED TO: {deviceName}</h1>
    {/* <Button backgroundColor="gray" color="white">Change pool/aquarium</Button> */}
    <Button backgroundColor="white" color="darkblue">
      <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
      Manage settings
      </Button>
      {/* <Login/> */}
  </div>;
}

export default HomePage;
