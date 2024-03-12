
const InfoBox = ({ ipAddress, location, timezone, isp, postalCode }) => {
  return (
      <div className="bg-white p-12 rounded-lg shadow-lg ">
          <div className="flex md:flex-row flex-col  items-center justify-between gap-12">
             {/* ip address  */}
          <div className="md:pr-12 md:border-r-[2px] md:border-r-gray-400">
              <h5 className="uppercase text-[11px] text-gray-400">Ip Adress</h5>
              <p>{ ipAddress}</p>
          </div>
          {/* location  */}
          <div className="md:pr-12 md:border-r-[2px] md:border-r-gray-400">
              <h5 className="uppercase text-[11px] text-gray-400">Location</h5>
                  <p>{location}</p>
                  <p>{postalCode}</p>
          </div>
          {/* timezone  */}
          <div className="md:pr-12 md:border-r-[2px] md:border-r-gray-400">
              <h5 className="uppercase text-[11px] text-gray-400">Timezone</h5>
              <p>{timezone}</p>
          </div>
          {/* ISP  */}
          <div className="md:pr-12">
              <h5 className="uppercase text-[11px] text-gray-400">ISP</h5>
              <p>{isp}</p>
          </div> 
          </div>     
    </div>
  )
}

export default InfoBox