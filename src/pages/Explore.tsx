import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <Slider />

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to={"/category/rent"}>
            <img
              className="exploreCategoryImg"
              about="rent"
              src={rentCategoryImage}
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to={"/category/sale"}>
            <img
              className="exploreCategoryImg"
              about="sell"
              src={sellCategoryImage}
            />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
