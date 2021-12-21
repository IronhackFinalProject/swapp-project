// import DribbbleOutlined from "@ant-design/icons"
import SportsIcon from './icons/sports.png'
import TvIcon from './icons/image.png'
import ModaIcon from './icons/moda.png'
import TelefoniaIcon from './icons/telefonia.png'
import AllIcon from './icons/all.png'
import "../SearchShortcuts/SearchShortcuts.css";
 


const SearchShortcuts = (props) => {
    const handleSearch = props.handleSearch;
  
    const searchDeporte = () => {
      handleSearch("Sports");
    };

    const searchTV = () => {
      handleSearch("Tv, Audio & Photo");
    };

    const searchModa = () => {
      handleSearch("Fashion");
    };

    const searchTelefonia = () => {
     handleSearch("Smartphones");
    };

    const searchAll = () => {
      handleSearch("");
    };
  
    return (
      <div className="SearchShortcut">
        <div>
          <button className='searchShortcuts-btn'><img className='searchShortcutsImg' src={AllIcon} alt="Search All" onClick={() => searchAll()} /></button>
          <p>All</p>
        </div>

        <div>
          <button className='searchShortcuts-btn'><img className='searchShortcutsImg' src={SportsIcon} alt="Search Deporte" onClick={() => searchDeporte()} /></button>
          <p>Sports</p>
        </div>

        <div>
          <button className='searchShortcuts-btn'><img className='searchShortcutsImg' src={TvIcon} alt="Search Tv" onClick={() => searchTV()} /></button>
          <p>Tv, Audio & Photo</p>
        </div>

        <div>
          <button className='searchShortcuts-btn'><img className='searchShortcutsImg' src={ModaIcon} alt="Search Moda" onClick={() => searchModa()} /></button>
          <p>Fashion</p>
        </div>

        <div>
        <button className='searchShortcuts-btn'><img className='searchShortcutsImg' src={TelefoniaIcon} alt="Search Telefonía" onClick={() => searchTelefonia()} /></button>
        <p>Smartphones</p>
        </div>

      </div>
    );
  };
  export default SearchShortcuts;