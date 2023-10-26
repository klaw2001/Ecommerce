import React from 'react';

// Functional component for the search input
function SearchInput() {
  return (
    <div className="input-group mt-5">
      <input
        type="text"
        className="form-control searchform"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        style={{ height: "50px" }}
      />
      <span className="input-group-text bg-transparent inputicon" id="basic-addon2">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
}

// Functional component for the category list
function CategoryList() {
  const categories = [
    "Fashion",
    "Foods",
    "Health",
    "Marketing",
    "Photo",
    "Photography",
    "Style",
  ];

  return (
    <div className="categorylist">
      <ul className="list-unstyled">
        {categories.map((category, index) => (
          <li className="list mt-3" key={index}>
            <a href="#" className="text-decoration-none">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Functional component for displaying a popular post
function PopularPost({ imageSrc, postTitle, postDate }) {
  return (
    <div className="single-post mt-3 d-flex">
      <div className="postimg me-3">
        <img src={imageSrc} alt="" style={{ width: "90px" }} />
      </div>
      <div className="post-content">
        <h5 className="post-text mb-1">
          <a href="#" className="text-black text-decoration-none">
            {postTitle}
          </a>
        </h5>
        <p className="text-secondary mb-0">{postDate}</p>
      </div>
    </div>
  );
}

// Functional component for the blog archives
function BlogArchives() {
  const archiveMonths = ["January (10)", "February (08)", "March (07)", "April (14)", "May (05)"];

  return (
    <div className="categorylist">
      <ul className="list-unstyled">
        {archiveMonths.map((archiveMonth, index) => (
          <li className="list mt-3" key={index}>
            <a href="#" className="text-decoration-none">
              {archiveMonth}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Functional component for displaying tags
function Tags() {
  const tags = ["Run", "Sport Shoes", "Frozen", "Nike", "Organics", "Snacks", "Shoes"];

  return (
    <div className="tags mt-4">
      {tags.map((tag, index) => (
        <a href="#" className="text-decoration-none" key={index}>
          {tag}
        </a>
      ))}
    </div>
  );
}

// Functional component for the right sidebar
function RightSidebar() {
  return (
    <>
      <div className="mt-4">
        <h3 className="border-bottom search-head">Search</h3>
        <SearchInput />
      </div>
      <div className="mt-5">
        <h3 className="border-bottom search-head">Category</h3>
        <CategoryList />
      </div>
      <div className="mt-5">
        <h3 className="border-bottom search-head">Popular Post</h3>
        <PopularPost imageSrc="/assets/images/blog-01.jpg" postTitle="This Is Nicholas K Spring 2020 Runway" postDate="Nov 12, 2020" />
        <PopularPost imageSrc="/assets/images/blog-06.jpg" postTitle="This is Second Post For XipBlog" postDate="Nov 12, 2020" />
        <PopularPost imageSrc="/assets/images/blog-02.jpg" postTitle="London Fashion Week 2020" postDate="Nov 12, 2020" />
      </div>
      <div className="mt-5">
        <h3 className="border-bottom search-head">BLOG ARCHIVES</h3>
        <BlogArchives />
      </div>
      <div className="mt-5">
        <h3 className="border-bottom search-head">TAGS</h3>
        <Tags />
      </div>
      <div className="pt-5">
        <div className="banner">
          <a href="#">
            <img src="/assets/images/banner-04.jpg" alt="" className="h-100 w-100" />
            <div className="overlay1"></div>
            <div className="overlay2"></div>
            <div className="overlay3"></div>
            <div className="overlay4"></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
