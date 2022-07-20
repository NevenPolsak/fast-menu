import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import review1 from "../../images/review1.jpg"
import review2 from "../../images/review2.jpg"
import review3 from "../../images/review3.jpg"

const style = {
    color:"rgb(255, 187, 0)",fontSize:"1.7rem"
}

const data = [
  {
    id: 1,
    img:review1,
    star: <FaStar style={style}/>,
    halfStar: <FaStarHalfAlt style={style}/>,
  },
  {
    id: 2,
    img:review2,
    star: <FaStar style={style}/>,
    halfStar: <FaStarHalfAlt style={style}/>,
  },
  {
    id: 1,
    img:review3,
    star: <FaStar style={style}/>,
    halfStar: <FaStarHalfAlt style={style}/>,
  },
];

export default data