import React from "react";

import Section from "../styles/Section";
import BlogCard from "../components/blog/BlogCard";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const url = "http://localhost:5000/api/articles/";

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
          articles.map(
            ({ _id: id, title, description, imgurl, date, slug }, index) => {
              return (
                <BlogCard
                  key={id}
                  title={title}
                  date={date}
                  description={description}
                  image={imgurl}
                  id={id}
                  slug={slug}
                />
              );
            }
          )}
      </article>
    </Section>
  );
};

export default Blog;
