import React from "react";

const blogData = [
  {
    imageUrl: "/assets/images/blog-01.jpg",
    category: "FASHION",
    title: "This Is Third Post For XipBlog",
    date: "Sep 12TH, 2020",
    author: "Demo hasthemes",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    imageUrl: "/assets/images/blog-02.jpg",
    category: "FASHION",
    title: "This Is Big Sale This Summer",
    date: "Sep 12TH, 2020",
    author: "Demo hasthemes",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    imageUrl: "/assets/images/blog-03.jpg",
    category: "FASHION",
    title: "This Is Nicolas K Spring 2021 Runway",
    date: "Sep 12TH, 2020",
    author: "Demo hasthemes",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
];

const OurBlog = () => {
  return (
    <div className="container my-5">
      <div className="row pt-5">
        <div className="headtext text-center">
          <h3 className="fw-light">
            <i>Read Our Blog</i>
          </h3>
          <h2 className="fw-bolder mb-3">LATEST NEWS</h2>
          <p>
            <img src="/assets/images/hr.webp" alt="" />
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-3 pb-5">
        {blogData.map((post, index) => (
          <div className="col" key={index}>
            <div className="blogimg">
              <a href="#">
                <img
                  src={post.imageUrl}
                  className="card-img-top rounded-0"
                  alt={post.title}
                />
                <span className="badge rounded-pill bg-white blogbadge">
                  {post.category}
                </span>
              </a>
            </div>
            <div className="blogcontent">
              <h6 className="py-4 blogtitle">
                <a href="#" className="text-black text-decoration-none">
                  {post.title}
                </a>
              </h6>
              <p>{post.content}</p>
            </div>
            <div className="post py-3 border-top border-bottom">
              <span className="me-2">{post.date}</span>
              <span className="postext">
                Posted by
                <span> {post.author}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
