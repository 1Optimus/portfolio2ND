import Mday from "../../assets/Mday.jpg";
import Mnight from "../../assets/Mnigth.jpg";

const Map = () => {
    return (
      <div className="w-full h-80 p-6">
        <div className="w-full h-full overflow-hidden rounded-xl pt-1">
          <img 
            src={Mday} 
            alt="map" 
           className="w-full h-full object-cover block dark:hidden"
          />
          <img 
            src={Mnight} 
            alt="map" 
           className="w-full h-full object-cover hidden dark:block"
          />
        </div>
      </div>
    );
  };
  

export default Map;