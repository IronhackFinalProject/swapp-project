const Searchbar = (props) => {
  const handleSearch = props.handleSearch;
  let query;

  const updateQuery = (value) => {
    query = value;
  };

  const search = () => {
    handleSearch(query);
  };

  return (
    <div className="Searchbar">
      <input
        type="text"
        placeholder="Search by category"
        onChange={(event) => updateQuery(event.target.value)}
      ></input>
      <button onClick={() => search()}>Search</button>
    </div>
  );
};
export default Searchbar;
