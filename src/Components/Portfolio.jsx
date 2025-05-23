/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "o3e-rs",
    description:
      "An educational simulator of Tomasulo’s Algorithm in Rust, with cycle-by-cycle execution and visualizable state.",
    url: "https://github.com/mellivorandy/o3e-rs",
  },
  {
    title: "cache-miss-analyzer",
    description:
      "A cache simulator with LRU policy. Designed to help students build a better understanding of cache mechanisms.",
    url: "https://github.com/mellivorandy/cache-miss-analyzer",
  },
  {
    title: "elinalgo",
    description:
      "An educational tool for visualizing CPU scheduling algorithms like FCFS, SJF, Round Robin, and Priority.",
    url: "https://github.com/mellivorandy/cache-miss-analyzer",
  },
  {
    title: "Distributed Task Manager on Linux",
    description:
      "A Linux-based system that distributes compute tasks across remote machines. Built for educational use with future potential for general-purpose distributed processing tools.",
    url: "https://github.com/mellivorandy/o3e-rs",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "3s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
