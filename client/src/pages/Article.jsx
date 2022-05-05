import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/073 useFetch";
import "./Article.css";

export default function Article() {
  let { id } = useParams();
  let navigate = useNavigate();

  const url = `http://localhost:5000/api/articles/${id}`;

  const { data: article, isPending, error } = useFetch(url);

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
          <div>{article.id}</div>
          <div>{article.description}</div>{" "}
        </div>
      )}
    </div>
  );
}
