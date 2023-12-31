import React from "react";
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Technology Consulting",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: blog1,
    },
    {
      id: 2,
      title: "Technology Consulting",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
      image: blog2,
    },
    {
      id: 3,
      title: "Technology Consulting",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
      image: blog3,
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blogs">
      <div className="text-center md:w-1/2 mx-auto ">
        <h2 className="text-4xl text-NeutralD_Grey font-semibold mb-4">
          LATEST BLOGS- <span className="text-BrandPrimary">weStrike</span>
        </h2>
        {/* <h3 className="text-xl text-NeutralD_Grey font-semibold mb-4 md:w-4/5">
          LATEST BLOGS
        </h3> */}
        <p className=" text-sm text-NeutralGrey mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque p
        </p>
      </div>
      {/* all blogs here */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key="blog.id" className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300 "
            />
            <div
              style={{ margin: "81px 0px 0px 43px" }}
              className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 top-12"
            >
              <h3 className="mb-3 text-NeutralGrey font-semibold ">
                {blog.title}
              </h3>
              <p>{blog.description}</p>
              <div className="flex items-center justify-center gap-8">
                <a href="/">
                  {" "}
                  <span className="text-BrandPrimary text-xm font-bold hover:text-neutral-700">
                    Read More
                  </span>{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
