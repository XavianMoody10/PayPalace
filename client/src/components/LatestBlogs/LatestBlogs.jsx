import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Blog } from "../Blog/Blog";
import blogImage1 from "../../assets/blog-1-image.png";
import blogImage2 from "../../assets/blog-2-image.png";
import blogImage3 from "../../assets/blog-3-image.png";
import { motion, useInView } from "motion/react";

export const LatestBlogs = () => {
  const section = useRef(null);
  const isInView = useInView(section, { amount: 0.2, once: true });

  return (
    <motion.section
      ref={section}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className=" space-y-4 mt-24"
    >
      <div className=" flex items-center justify-between w-[90%] max-w-[1400px] mx-auto">
        <h2 className=" font-primary font-semibold text-center text-2xl lg:text-3xl xl:text-4xl">
          Stories
        </h2>

        <Link
          className={` text-center text-dark-blue border-2 border-dark-blue font-semibold whitespace-nowrap py-3 px-7 rounded-4xl duration-150 hover:bg-dark-blue hover:text-white`}
        >
          See All
        </Link>
      </div>

      <div className=" grid gap-8 lg:grid-cols-3 w-[90%] max-w-[1400px] mx-auto">
        <Blog
          date={"Jul 10, 2023"}
          title={"Seamlessly sync your systems for efficiency"}
          image={blogImage1}
        />

        <Blog
          date={"Nov 22, 2023"}
          title={"Leveraging POS services for success"}
          image={blogImage2}
        />

        <Blog
          date={"Jul 22, 2023"}
          title={"How POS services streamline businesses"}
          image={blogImage3}
        />
      </div>
    </motion.section>
  );
};
