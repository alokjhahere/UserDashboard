
const SearchBar = ({value, onChange}) => {
    const handleInputChange = (e) => {
    onChange(e.target.value)
  }
  return (
      <div>
        <input type="text" value={value} onChange={handleInputChange} className="m-2 p-2 border border-gray-400 rounded-full"/>
      </div>
       )
}

export default SearchBar
