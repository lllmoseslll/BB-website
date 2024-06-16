import path from "path";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const BlogCard = (props) => {
  return (
    <div className=" h-[400px] ">
      <img
        src={props.imageUrl}
        className="w-[100%] h-[70%] object-cover"
        alt=""
      />
      <div className=" flex justify-center flex-col text-white text-xl font-semibold">
        <h1 className="my-4 flex justify-center">{props.title}</h1>
        <Link to="/blogpage" active={path === "/blogpage"}>
          <button className="w-full border-4 border-[#ff8828] hover:bg-[#ff8828] rounded-xl             p-2">
            Learn more &rArr;{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  imageUrl: propTypes.string,
  title: propTypes.string,
  body: propTypes.string,
};
