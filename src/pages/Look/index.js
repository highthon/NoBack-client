import "./style.scss";
import Categories from "./Category";
import Lesson from "../../components/Lesson";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function Look() {
  // const [selectedCategory, setSelectedCategory] = useState(Categories.all);
  const categories = [
    Categories.all,
    Categories.cook,
    Categories.crafts,
    Categories.art,
    Categories.etc,
  ];
  return (
    <div className="Look-tit">
      <div className="Look-tit-div">
        <div className="look-tit-title">
          <p>취미 클래스</p>
        </div>

        <div className="look-category">
          <div className="look-tit-category">
            {categories.map((c) => (
              <a className="category">{c.text}</a>
            ))}
          </div>
          <div className="look-category-sun">
            <a>
              인기순 <MdOutlineKeyboardArrowDown />
            </a>
          </div>
        </div>
        <div className="look-lesson">
          <Lesson />
        </div>
      </div>
      <div></div>
    </div>
  );
}
