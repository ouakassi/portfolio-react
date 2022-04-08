import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./BlogStyle.css";
import Section from "../../styles/Section";
import BlogCard from "./BlogCard";
import { BlogPosts } from "../../data/Data";
import { ShowMoreButton } from "../../styles/Buttons/ShowMoreButton";

const Blog = () => {
  const [postNumber, setPostNumber] = useState(4);
  const [blogPost, setBlogPost] = useState([]);

  return (
    <Section
      className="blog"
      id="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="recent articles"
    >
      <article className="articles__container container">
        {BlogPosts.map(({ id, title, description, image }, index) => {
          if (index >= 2) return null;
          return (
            <BlogCard
              key={id}
              title={title}
              description={description}
              image={image}
            />
          );
        })}
      </article>
      <Link to="/blog">
        <ShowMoreButton title="all articles" icon="uil uil-arrow-up-right" />
      </Link>
    </Section>
  );
};

export default Blog;
