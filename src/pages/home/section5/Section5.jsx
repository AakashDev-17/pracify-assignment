import React from "react";
import leaf from "../../../assets/Group 114.png";
import Blog1 from "../../../assets/Blog1.png";
import Blog2 from "../../../assets/Blog2.png";
import Blog3 from "../../../assets/Blog3.png";
import BlogCard from "../../../components/blog-card/BlogCard";
import "./section5.css";

const Section5 = () => {
  return (
    <div className="section5">
      <img className="section5-leaf" src={leaf} alt="leaf" />
      <h1 className="section5-heading">Read Our Blog</h1>
      <p className="section5-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="section5-blog-box">
        <BlogCard
          img={Blog1}
          heading="Blog Post One"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <BlogCard
          img={Blog2}
          heading="Blog Post One"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <BlogCard
          img={Blog3}
          heading="Blog Post One"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
      </div>
    </div>
  );
};

export default Section5;
