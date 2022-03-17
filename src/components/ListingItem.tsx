import deleteIcon from "../assets/svg/deleteIcon.svg";
import editIcon from "../assets/svg/editIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";
import { Link } from "react-router-dom";
import { DocumentData } from "firebase/firestore";

type Props = {
  id: string;
  listing: DocumentData;
  onDelete?: any;
  onEdit?: any;
};

const ListingItem: React.FC<Props> = ({ listing, id, onDelete, onEdit }) => {
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>

          <p className="categoryListingPrice">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : "1 Bathrooms"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <img
          src={deleteIcon}
          className="removeIcon"
          alt="remove icon"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}

      {onEdit && (
        <img src={editIcon} className="editIcon" onClick={() => onEdit(id)} />
      )}
    </li>
  );
};

export default ListingItem;
