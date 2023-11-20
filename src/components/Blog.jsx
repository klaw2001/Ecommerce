import React from "react";
import HeaderTop from "../components/HeaderTop";
import RightSidebar from "./RightSidebar";
import GlobalHero from "./HeroSections/GlobalHero";

const Blog = () => {
  const blogPosts = [
    {
      title: "This Is Third Post For XipBlog",
      image: "/assets/images/blog-01.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "This Is Big Sale This Summer",
      image: "/assets/images/blog-02.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "This Is Nicholas K Spring 2021 Runway",
      image: "/assets/images/blog-03.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "This Is Big Sale This Summer",
      image: "/assets/images/blog-06.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "This Is Third Post For XipBlog",
      image: "/assets/images/blog-05.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "This Is Nicholas K Spring 2020 Runway",
      image: "https://www.youtube.com/embed/DgwCCN5Qi3E",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "London Fashion Week 2020",
      image: "/assets/images/blog-06.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
    {
      title: "This Is Secound Post For XipBlog",
      image: "/assets/images/blog-07.jpg",
      category: "FASHION",
      date: "Sep 12TH, 2020",
      author: "Demo hasthemes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, mollitia vel obcaecati sint quidem, ipsam laboriosam nobis porro ad similique est totam doloribus culpa corporis?",
    },
  ];

  const BreadcrumbItem = ({ text }) => (
    <li className="breadcrumb-item breadtext1">
      <a href="#" className="text-decoration-none pe-1">
        {text}
      </a>
    </li>
  );

  const BreadcrumbIcon = () => (
    <li className="px-2 active breadicon" aria-current="page">
      <i className="bi bi-chevron-right"></i>
    </li>
  );

  return (
    <>
      {/* <HeaderTop /> */}
      <GlobalHero headingText="Blog" />
      {/* <div className="pagebg">
        <div className="container">
          <div className="pagebanner">
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center"
            >
              <ol className="breadcrumb">
                <BreadcrumbItem text="Home" />
                <BreadcrumbIcon />
                <BreadcrumbItem text="Blog" />
              </ol>
            </nav>
          </div>
        </div>
      </div> */}

      <div className="pt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8">
              <div className="left-content">
                {blogPosts.map((post, index) => (
                  <div className="mt-4 leftrow" key={index}>
                    <div className="col-lg-5 blogimg imge">
                      <div>
                        <img src={post.image} alt={post.title} />
                        <div className="imgbadge">
                          <a
                            href="#"
                            className="text-decoration-none rounded-pill"
                          >
                            {post.category}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 blogcontent1">
                      <h5 className="mb-3 blogtitle1">
                        <a href="#" className="text-black text-decoration-none">
                          {post.title}
                        </a>
                      </h5>
                      <div className="post py-3 border-top border-bottom">
                        <span className="me-2">{post.date}</span>
                        <span className="postext">
                          Posted by <span>{post.author}</span>
                        </span>
                      </div>
                      <p className="blogtext mb-0 mt-2">{post.content}</p>
                      <a href="#" className="text-decoration-none more pt-2">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="right-content">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
