import OfferIcon from "../assets/svg/localOfferIcon.svg";
import OfferIconActive from "../assets/svg/localOfferIconActive.svg";
import ExploreIcon from "../assets/svg/exploreIcon.svg";
import ExploreIconActive from "../assets/svg/exploreIconActive.svg";
import PersonOutlineIcon from "../assets/svg/personOutlineIcon.svg";
import PersonOutlineIconActive from "../assets/svg/personOutlineIconActive.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <img
              src={!pathMatchRoute("/") ? ExploreIcon : ExploreIconActive}
              width={36}
              height={36}
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <img
              src={!pathMatchRoute("/offers") ? OfferIcon : OfferIconActive}
              width={36}
              height={36}
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <img
              src={
                !pathMatchRoute("/profile")
                  ? PersonOutlineIcon
                  : PersonOutlineIconActive
              }
              width={36}
              height={36}
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
