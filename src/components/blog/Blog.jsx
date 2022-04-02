import React, { useState } from "react";
import "./BlogStyle.css";
import Section from "../../styles/Section";
import BlogCard from "./BlogCard";
import { BlogPosts } from "../../data/Data";
import { ShowMoreButton } from "../../styles/Buttons/ShowMoreButton";

const Blog = () => {
  const [postNumber, setPostNumber] = useState(4);
  return (
    <Section
      className="blog"
      id="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="recent articles"
    >
      <article className="articles__container">
        {BlogPosts.map(({ id, title, description, image }) => {
          console.log(postNumber);
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
      <ShowMoreButton />
    </Section>
  );
};

export default Blog;
