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
          <p>{props.description}</p>
          <div className="article__tags">{props.tags}</div>
          <div className="article__data-dates">
            <span className="article__data-date">
              {props.publishedDate && props.publishedDate.split("T")[0]}
            </span>
            <span>{props.readTime}</span>
          </div>
        </div>

        <ShowMoreButton title="read more" icon="uil-corner-down-right-alt" />
      </article>
    </Link>
  );
};

export default BlogCard;
