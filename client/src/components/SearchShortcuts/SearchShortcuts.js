// import DribbbleOutlined from "@ant-design/icons"
import SportsIcon from './icons/sports.png'
import TvIcon from './icons/image.png'
import ModaIcon from './icons/moda.png'
import TelefoniaIcon from './icons/telefonia.png'
import "../SearchShortcuts/SearchShortcuts.css";
// import { Link } from 'react-router-dom';
 


const SearchShortcuts = (props) => {
    const handleSearch = props.handleSearch;
  
    const searchDeporte = () => {
      handleSearch("Deporte y Ocio");
    };

    const searchTV = () => {
      handleSearch("TV, Audio y Foto");
    };

    const searchModa = () => {
      handleSearch("Moda y accesorios");
    };

    const searchTelefonia = () => {
     handleSearch("Móviles y Telefonía");
    };

    const searchAll = () => {
      handleSearch("");
    };
  
    return (
      <div className="SearchShortcut">

        <button><img src={SportsIcon} alt="Search Deporte" onClick={() => searchDeporte()} /></button>
        {/* <Link to={PATHS.HOMEPAGE} onClick={() => searchDeporte()}> </Link> */}
          {/* <img src={SportsIcon} alt="Search Deporte" onClick={() => searchDeporte()} /> */}
        

      {/* <Link to={PATHS.FAVORITES} className="nav__projectName">
      <HeartOutlined className="hearticon"/>
      </Link> */}

        <button><img src={TvIcon} alt="Search Tv" onClick={() => searchTV()} /></button>
        <button><img src={ModaIcon} alt="Search Moda" onClick={() => searchModa()} /></button>
        <button><img src={TelefoniaIcon} alt="Search Telefonía" onClick={() => searchTelefonia()} /></button>
        <button><img src={SportsIcon} alt="Search All" onClick={() => searchAll()} /></button>

      </div>
    );
  };
  export default SearchShortcuts;