import "./Header.model.css"
interface IHeader 
{
    selectedOption:number;
}
function Header({selectedOption}:IHeader) {

var headerLabels = new Array('Home','Manual Refuel','Automatic refuel');


  return <div className="header"><h1>{headerLabels[selectedOption-1]}</h1></div>;
}

export default Header;
