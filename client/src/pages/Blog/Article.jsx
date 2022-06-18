import { useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Article.css";

export default function Article() {
  let { slug } = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  const url = `/articles/${slug}`;

  const { data: article, isPending, error } = useFetch(url);

  console.log(slug);
  console.log(location.pathname);

  useLayoutEffect(() => {
    if (location.pathname === "/blog/" + slug) {
      document.querySelector(".header").classList.add("blog-header");
      document.querySelector("body").classList.add("blog-body");
    } else {
      document.querySelector(".header").classList.remove("blog-header");
      document.querySelector("body").classList.remove("blog-body");
    }
  });

  useEffect(() => {
    if (error)
      setTimeout(() => {
        navigate("/blog");
      }, 1000);
  }, [error, navigate]);

  return (
    <div className="article-ds">
      {isPending && <div>Loading .....</div>}
      {error && <div>{error} .....</div>}
      {article && (
        <div>
          <div>{article._id}</div>
          <div>{article.title}</div>
          <img src={article.imgUrl} alt="" />
          <div>{article.description}</div>
          <div>{article.slug}</div>
          <div>{article.readTime}</div>
          <div>{article.publishedDate.split("T")[0]} </div>
        </div>
      )}
    </div>
  );
}
