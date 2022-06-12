import React, { useEffect, useState } from "react";

import Section from "../../components/Section";
import BlogCard from "../../components/blog/BlogCard";
import { useFetch } from "../../hooks/useFetch";
import checkColor from "../../components/projects/checkColor";
import ArticlesTags from "../../components/ArticlesTags";
import BlogCardSkeleton from "../../components/blog/BlogCardSkeleton";

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
      <ArticlesTags tagName={newTags.sort()} searchArticle={searchArticle} />
      {articles &&
        articles.map((project) => {
          project &&
            project.tags.map((tag) => {
              if (!newTags.includes(tag)) setNewTags([...newTags, tag]);
            });
        })}
      <article className="articles__container container">
        {isPending && <BlogCardSkeleton cards={6} />}
        {error && <div>{error} .....</div>}
        {articles &&
          articles.map(
            ({
              _id: id,
              title,
              description,
              imgurl,
              publishedDate,
              slug,
              tags,
            }) => {
              return (
                <BlogCard
                  key={id}
                  title={title}
                  publishedDate={publishedDate}
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
