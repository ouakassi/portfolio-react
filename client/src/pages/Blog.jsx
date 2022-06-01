import React, { useEffect, useState } from "react";

import Section from "../components/Section";
import BlogCard from "../components/blog/BlogCard";
import { useFetch } from "../hooks/useFetch";
import checkColor from "../components/projects/checkColor";
import ArticlesTags from "../components/ArticlesTags";
import BlogCardSkeleton from "../components/blog/BlogCardSkeleton";

const Blog = () => {
  const [url, setUrl] = useState("/articles/");
  const [newTags, setNewTags] = useState([]);

  console.log(newTags);

  const { data: articles, isPending, error } = useFetch(url);

  const searchArticle = async (query) => {
    setUrl(`/articles/?${query}`);
  };

  console.log(newTags);

  return (
    <Section
      className="blog"
      id="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="recent articles"
    >
      <ArticlesTags tagName={newTags} searchArticle={searchArticle} />
      {/* {articles &&
        articles.map((project) => {
          project &&
            project.tags.map((tag) => {
              console.log(newTags);
              if (!newTags.includes(tag)) setNewTags(tag);
              console.log(tag);
            });
        })} */}
      <article className="articles__container container">
        {isPending && <BlogCardSkeleton cards={6} />}
        {error && <div>{error} .....</div>}
        {articles &&
          articles.map(
            ({ _id: id, title, description, imgurl, date, slug, tags }) => {
              return (
                <BlogCard
                  key={id}
                  title={title}
                  date={date}
                  tags={tags.map((tag, i) => {
                    return checkColor(tag, i, "project__language");
                  })}
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
