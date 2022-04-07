import React from "react";

import Section from "../styles/Section";
import BlogCard from "../components/blog/BlogCard";

import { BlogPosts } from "../data/Data";

export default function Blog() {
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
    </Section>
  );
}
