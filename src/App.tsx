import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ManualRefuel from "./pages/ManualRefuel/ManualRefuel";
import AutomaticRefuel from "./pages/AutomaticRefuel/AutomaticRefuel";
import Footer from "./components/Footer/Footer";
import 'firebase/compat/firestore'
import 'firebase/compat/database' // <-- Import RTDB SDK
import { getDatabase, ref,onValue} from "firebase/database";
import { initializeApp } from "firebase/app";


export const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: "https://iot-project-feed2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app); 

function App() {

	const [currentPage, getCurrentPage] = useState<number>(1);
	
	
	const [data, setData] = useState<number|null>(null);
	const database = getDatabase();
	
	useEffect(() => {
	const cartRef = ref(database, 'dubina/int');
onValue(cartRef, (snapshot) => {
  const data = snapshot.val();
  if( !!data ) {
    console.clear();
	setData(data);
  } else {
    console.log('Data not found');
  } 
  
  
});
  }, []);


	const route = () => {
		switch (currentPage) {
			case 1:
				return <HomePage />;
			case 2:
				return <ManualRefuel waterLevel={data} />;
			case 3:
				return <AutomaticRefuel  waterLevel={data}/>;
			default:
				<HomePage />;
		}
	};

	return (
		<>
		<Header selectedOption={currentPage}/>
			<div className="outlet">
				{route()}
			</div>
			<Footer onChange={getCurrentPage}></Footer>
		</>
	);
}

export default App;
