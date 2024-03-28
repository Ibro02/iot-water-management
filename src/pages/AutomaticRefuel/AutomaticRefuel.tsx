import {CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../../components/Button/Button";
import "./AutomaticRefuel.model.css"
import 'firebase/compat/firestore'
import 'firebase/compat/database' // <-- Import RTDB SDK
import { getDatabase, ref, set,onValue} from "firebase/database";
import { IWaterLevev } from "../ManualRefuel/ManualRefuel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function AutomaticRefuel({waterLevel, isDarkMode}:IWaterLevev) {
    const percentage = waterLevel??0;
    const [isPumping, setPumpingStatus] = useState<boolean>(false);
    const database = getDatabase();
    const [dots, setDots] = useState('');

    useEffect(() => {
        const cartRef = ref(database, '/refuel/boolean');
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      setPumpingStatus(data);
      if( !!data ) {
        console.log(data);
      } else {
        console.log('Data not found');
      }  
    },{onlyOnce:false});
      }, [waterLevel]);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setDots(prevDots => {
            if (prevDots === '...') {
              return '';
            } else {
              return prevDots + '.';
            }
          });
        }, 1000); // Adjust the speed of the animation here
    
        return () => clearInterval(intervalId);
      }, [isPumping]);

const turnRefuel = () =>
{
    set(ref(database, 'refuel/boolean'), !isPumping).then( () => {
        // Success.
        console.clear();
        setPumpingStatus(!isPumping);
    } ).catch( (error) => {
        console.log(error);
    } );
}

  return <div className="automatic-refuel">
  <h1>Water level</h1>
  <div style={{width:'38vh', margin:'auto'}}>
  <CircularProgressbarWithChildren value={percentage} text={`${percentage}%`} styles={buildStyles({textColor:isDarkMode?"white":"black",
  pathColor: '#6600FF',
})}/>
  </div>
      {!isPumping&&<h4><FontAwesomeIcon icon={faInfoCircle} className="icons"></FontAwesomeIcon> Click the button to refuel water tank</h4>}

     {!isPumping?<Button backgroundColor="purple" color="white" type={2}  onClick={turnRefuel}>
     <FontAwesomeIcon icon={faRefresh} className="icons"></FontAwesomeIcon>
          Refill
      </Button>:<div className="refueling">
      <Spinner/>
      
      <h2>Refilling{dots}</h2>
      </div>}
  
</div>
}

export default AutomaticRefuel;
