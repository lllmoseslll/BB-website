import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <Link to={props.path}>
      <div className="w-full flex flex-col justify-between">
        <img
          src={props.imageUrl}
          className="w-full h-[300px] object-cover"
          alt=""
        />
        <div className="h-[80px] flex items-center">
          <p className="text-white text-2xl">{props.title}</p>
        </div>
      </div>
    </Link>
  );
};
Product.propTypes = {
  imageUrl: propTypes.string,
  title: propTypes.string,
  path: propTypes.string,
};
