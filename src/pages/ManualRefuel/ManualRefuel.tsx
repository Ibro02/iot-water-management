import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../../components/Button/Button";
import "./ManualRefuel.model.css";
import 'firebase/compat/firestore'
import 'firebase/compat/database' // <-- Import RTDB SDK
import { getDatabase, ref, set} from "firebase/database";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IWaterLevev
{
	waterLevel?:number|null,
	refuelStatus?:boolean,
	isDarkMode?:boolean,
}
function ManualRefuel({waterLevel,isDarkMode}:IWaterLevev) {
	const database = getDatabase();
	const [waterPin, setWaterPin] = useState<boolean>(false);
	const [poolPin, setPoolPin] = useState<boolean>(false);
    
	const [isWaterPinWorking, setWaterPinWorkStatus] = useState<boolean>(false);
	const [isPoolPinWorking, setPoolPinWorkStatus] = useState<boolean>(false);

	const turnOnWaterPin = () =>
	{
console.log(import.meta.env.API_KEY)

		setWaterPin(!waterPin);
		set(ref(database, 'waterPin/boolean'), waterPin).then( () => {
			// Success.
			setWaterPinWorkStatus(waterPin);
		} ).catch( (error) => {
			console.log(error);
		} );
	}
	const turnOnPoolPin = async () =>
	{

		setPoolPin(!poolPin);
		await set(ref(database, 'poolPin/boolean'), poolPin).then( () => {
			// Success.
			setPoolPinWorkStatus(poolPin);
		} ).catch( (error) => {
			console.log(error);
		} );

	}

	const percentage = waterLevel??0;
	return (
		<div className="manual-refuel">
			<h1>Water level</h1>
			<div className="progress-bar" style={{width:'38vh'}}>
			<CircularProgressbarWithChildren value={percentage} text={`${percentage}%`} styles={buildStyles({
				textColor: isDarkMode?"white":"black",
				pathColor: '#6600FF',
			})}/>
			</div>

			<div className="container-reverse">
				<div className="container">
				<Button backgroundColor={!isWaterPinWorking?"#6600FF":"red"} color="white" onClick={turnOnWaterPin} disabled={isPoolPinWorking}>
				+ Increase
				</Button>
				<Button color="white" backgroundColor={!isPoolPinWorking?"#6600FF":"red"}  onClick={turnOnPoolPin} disabled={isWaterPinWorking}>
					- Reduce
					</Button>
				</div>
			<h4><FontAwesomeIcon icon={faInfoCircle} className="icons"></FontAwesomeIcon> Click the button to activate/stop water pump</h4>
			</div>
		</div>
	);
}

export default ManualRefuel;


