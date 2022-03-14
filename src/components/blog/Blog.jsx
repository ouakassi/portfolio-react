import React from "react";
import "./BlogStyle.css";
import SectionTitle from "../../styles/SectionTitle";

// import SliderScript from "./SliderScript.js";

// SliderScript.slider(
//   ".articles__container",
//   ".blog__btn--left",
//   ".blog__btn--right",
//   ".blog__dots",
//   "blog__dots-dot"
// );

const Blog = () => (
  <section className="blog" id="blog">
    <SectionTitle
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="recent articles"
    />

    <div className="blog__container">
      <div className="blog__btns">
        <i className="uil uil-angle-left-b blog__btn blog__btn--left" />
        <i className="uil uil-angle-right-b blog__btn blog__btn--right" />
      </div>
      <div className="articles__container">
        <article className="article__data">
          <img src="./images/portfolio1.jpg" alt="" />
          <h3>Top 10 Javascript functions</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            ut quos et saepe ipsam sequi esse blanditiis atque iusto eveniet.
          </p>
          <a href="google.com" className="show-more__button">
            show more
            <i className="uil uil-external-link-alt button__icon" />
          </a>
        </article>
        <article className="article__data">
          <img src="./assets/img/portfolio1.jpg" alt="" />
          <h3>Top 10 Javascript functions</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            ut quos et saepe ipsam sequi esse blanditiis atque iusto eveniet.
          </p>
          <a href="google.com" className="show-more__button">
            show more
            <i className="uil uil-external-link-alt button__icon" />
          </a>
        </article>
        <article className="article__data">
          <img src="./assets/img/portfolio1.jpg" alt="" />
          <h3>Top 10 Javascript functions</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            ut quos et saepe ipsam sequi esse blanditiis atque iusto eveniet.
          </p>
          <a href="google.com" className="show-more__button">
            show more
            <i className="uil uil-external-link-alt button__icon" />
          </a>
        </article>
      </div>
      <div className="articles__container">
        <article className="article__data">
          <img src="./assets/img/portfolio1.jpg" alt="" />
          <h3>Top 10 Javascript functions</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            ut quos et saepe ipsam sequi esse blanditiis atque iusto eveniet.
          </p>
        </article>
        <article className="article__data">
          <img src="./assets/img/portfolio1.jpg" alt="" />
          <h3>Top 10 Javascript functions</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            ut quos et saepe ipsam sequi esse blanditiis atque iusto eveniet.
          </p>
        </article>
      </div>
      <div className="blog__dots" />
    </div>
  </section>
);

export default Blog;
