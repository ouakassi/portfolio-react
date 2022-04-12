import React from "react";

import Section from "../styles/Section";
import BlogCard from "../components/blog/BlogCard";
import { useFetch } from "../hooks/073 useFetch";

export default function Blog() {
  const url = "http://localhost:3000/articles";

  const { data: articles, isPending, error } = useFetch(url);
  return (
    <Section
      className="blog"
      id="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="recent articles"
    >
      <article className="articles__container container">
        {isPending && <div>Loading .....</div>}
        {error && <div>{error} .....</div>}
        {articles &&
          articles.map(({ id, title, description, image }, index) => {
            return (
              <BlogCard
                key={id}
                title={title}
                description={description}
                image={image}
                id={id}
              />
            );
          })}
      </article>
    </Section>
  );
}
