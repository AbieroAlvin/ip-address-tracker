
const SearchBar = ({ipAddress, handleSearch, setIpAddress}) => {
  return (
    <div className="flex items-center gap-2 mb-12 md:w-3/4 w-full">
          <input
            type="text"
            placeholder="Search for IP addresses or domains"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="p-2 border border-gray-300 rounded-md flex-grow"
          />
          <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-md">
            Track
          </button>
        </div>
  )
}

export default SearchBar