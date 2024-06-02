import propTypes from "prop-types"

export const BlogPage = (props) => {
  return (
    <div className="w-full min-h-screen">
        <img src={props.imageUrl} alt=""  className="w-full h-[50svh]"/>
        <h1>{props.title}</h1>
        <p>{props.body}</p>

    </div>
  )
}

BlogPage.propTypes = {
    body: propTypes.string,
    title: propTypes.string,
    imageUrl: propTypes.string,
}