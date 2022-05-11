import React from "react";
import "./BlogCrad.css";
import { ShowMoreButton } from "../../styles/Buttons/ShowMoreButton";
import StyledTitle from "../../styles/StyledTitle";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <article className="article">
      <img src={props.image} alt={props.title} />
      <div className="article__data">
        <StyledTitle>{props.title}</StyledTitle>
        <StyledTitle>{props.date}</StyledTitle>
        <p>{props.description}</p>
      </div>
      <Link to={`/blog/${props.slug}`}>
        <ShowMoreButton title="read more" icon="uil-corner-down-right-alt" />
      </Link>
    </article>
  );
};

export default BlogCard;
