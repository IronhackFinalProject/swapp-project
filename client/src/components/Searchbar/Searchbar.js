import "./Searchbar.css"
import { SearchOutlined } from "@ant-design/icons";

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
      <input className="searchInput"
        type="text"
        placeholder="Search..."
        onChange={(event) => updateQuery(event.target.value)}
      ></input>
      <button className="searchBtn" onClick={() => search()}><SearchOutlined /></button>
    </div>
  );
};
export default Searchbar;
