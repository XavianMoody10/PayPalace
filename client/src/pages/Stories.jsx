import React from "react";
import { Header } from "../layouts/Header/Header";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";
import { Footer } from "../layouts/Footer/Footer";
import blogImage1 from "../assets/blog-1-image.png";
import blogImage2 from "../assets/blog-2-image.png";
import blogImage3 from "../assets/blog-3-image.png";
import { Blog } from "../components/Blog/Blog";

export const Stories = () => {
  return (
    <>
      <Header />

      <main className=" bg-light-blue">
        <section className=" w-[90%] mx-auto max-w-[1400px] space-y-14 pt-16 mb-16">
          <h1 className=" font-primary font-semibold text-4xl sm:text-5xl sm:leading-14">
            Stories
          </h1>

          <div className=" grid gap-8 lg:grid-cols-3">
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
        </section>

        <MarqueeSlider />
      </main>
      <Footer></Footer>
    </>
  );
};
