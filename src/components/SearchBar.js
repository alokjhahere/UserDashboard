const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search users by name..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
