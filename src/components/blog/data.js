import {AiFillCalendar} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"

import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.png"
import blog3 from "../../images/blog3.png"

const style = {
    paddingRight:".5rem",
    color:"rgb(255, 187, 0)"
}

const data = [{
    id:1,
    img:blog1,
    icon1:<AiFillCalendar style={style}/>,
    icon2:<FaUserAlt style={style}/>
},
{
    id:2,
    img:blog2,
    icon1:<AiFillCalendar style={style}/>,
    icon2:<FaUserAlt style={style}/>
},
{
    id:3,
    img:blog3,
    icon1:<AiFillCalendar style={style}/>,
    icon2:<FaUserAlt style={style}/>
},

]

export default data