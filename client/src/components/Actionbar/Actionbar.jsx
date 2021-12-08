import "./Actionbar.css"
import { HeartOutlined, HomeOutlined, MessageOutlined, PlusCircleOutlined, SmileOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

function Actionbar () {

    return(
<div className="actionbar">


<Link to={PATHS.HOMEPAGE} className="nav__projectName">
         <HomeOutlined className="homeicon"/>
      </Link>

<HeartOutlined className="hearticon"/>
<PlusCircleOutlined className="plusicon"/>
<MessageOutlined className="messageicon"/>
<SmileOutlined className="smileicon"/>

</div>
    )
}

export default Actionbar