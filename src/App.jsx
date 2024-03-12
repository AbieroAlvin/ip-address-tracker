import { useState, useEffect } from "react";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import InfoBox from "./components/InfoBox";
import axios from "axios";

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [locationInfo, setLocationInfo] = useState({
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    postalCode: "10001",
    timezone: "-05:00",
    isp: "SpaceX Starlink",
  });

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_QosdPoHH6MLR1muDWFsRNaWlHn7E6&ipAddress=${ipAddress}`
      );
      setLocationInfo({
        ipAddress: response.data.ip,
        location: `${response.data.location.city}, ${response.data.location.region}, ${response.data.location.country}`,
        postalCode: response.data.location.postalCode,
        timezone: `UTC${response.data.location.timezone}`,
        isp: response.data.isp,
      });
    } catch (error) {
      console.error("Error fetching location data:", error);
      // Set default values in case of an error
      setLocationInfo({
        ipAddress: "192.212.174.101",
        location: "Brooklyn, NY ",
        postalCode: "10001",
        timezone: "-05:00",
        isp: "SpaceX Starlink",
      });
    }
  };

  useEffect(() => {
    // Load initial IP Address on page load
    const fetchInitialIpAddress = async () => {
      try {
        const response = await axios.get("https://api64.ipify.org?format=json");
        setIpAddress(response.data.ip);
        // Set default values for locationInfo
        setLocationInfo({
          ipAddress: response.data.ip,
          location: "Brooklyn, NY",
          postalCode: "10001",
          timezone: "-05:00",
          isp: "SpaceX Starlink",
        });
      } catch (error) {
        console.error("Error fetching initial IP address:", error);
      }
    };

     fetchInitialIpAddress();
  },[]);

  return (
    <div className="flex flex-col items-center justify-center  h-full w-full mx-auto">
      <div className="rounded-md shadow-md w-full h-full flex flex-col items-center justify-center mx-auto">
        <div className="w-full h-[40vh]  flex flex-col items-center justify-center  md:bg-[url(src/assets/images/pattern-bg-desktop.png)] bg-[url(src/assets/images/pattern-bg-mobile.png)] bg-cover bg-no-repeat bg-center ">
           <div className="p-12 max-w-[1320px] flex flex-col items-center justify-center translate-y-[4rem] z-[40]">
          <h1 className="text-2xl font-bold mb-6 text-center">IP Address Tracker</h1>
        <SearchBar ipAddress={ipAddress} handleSearch={handleSearch}  setIpAddress={setIpAddress}/>
        <InfoBox {...locationInfo} />
       </div>
        </div>
        
        <Map ipAddress={ipAddress} />
      </div>
    </div>
  );
}

export default App;
