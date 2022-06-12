import "./BlogCrad.css";
import { ShowMoreButton } from "../../components/Buttons/ShowMoreButton";
import StyledTitle from "../../components/StyledTitle";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <Link to={`/blog/${props.slug}`}>
      <article className="article" key={props.id}>
        <img className="article__image" src={props.image} alt={props.title} />
        <div className="article__data">
          <StyledTitle>{props.title}</StyledTitle>
          <div className="article__data-header">
            <img
              className="article__data-image"
              src="./images/my-image.jpg"
              alt=""
            />
            <span className="article__data-date">
              {props.publishedDate && props.publishedDate.split("T")[0]}
            </span>
          </div>
          <div className="article__tags">{props.tags}</div>
        </div>

        <ShowMoreButton title="read more" icon="uil-corner-down-right-alt" />
      </article>
    </Link>
  );
};

export default BlogCard;
