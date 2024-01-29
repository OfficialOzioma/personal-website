// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "Bookly REST API",
    category: "API Application",
    img: require("@/assets/images/bookly_image.webp"),
    link: "https://github.com/OfficialOzioma/bookly",
    description:
      "This is a RESTful API where users can search for books related to programming, IT or technology, from https://itbook.store. Registered users can also add books to their favourite list.",
  },
  {
    id: 2,
    title: "The Movie App",
    category: "Web Application",
    img: require("@/assets/images/movie_app.jpg"),
    link: "https://github.com/OfficialOzioma/Movie-app",
    description:
      "This movie App fetches data from TMDB API and displays it on the page. The user can See all availble movies, Actors and TV shows. The user can also view the details of the movie or TV show.",
  },
  {
    id: 3,
    title: "Laundry App",
    category: "Web Application",
    img: require("@/assets/images/laundry_app.jpg"),
    link: "https://github.com/OfficialOzioma/Laundry_management-_system",
    description:
      "Welcome to the laundry management system. This is a simple system that allows you to manage your laundry. You can add, delete, update and view your laundry. This system is built using PHP and MYSQL",
  },
  {
    id: 4,
    title: "Projects Management API",
    category: "API Application",
    img: require("@/assets/images/projects_management_api.jpg"),
    link: "https://github.com/OfficialOzioma/Project-manager-api",
    description:
      "This is the API collection for the Project Manager Application Built with AdonisJs version 5. Its Mini eCommerce API is a crud API.",
  },
  {
    id: 5,
    title: "Job Listing App",
    category: "Web Application",
    img: require("@/assets/images/job_list_app.jpeg"),
    link: "https://github.com/OfficialOzioma/Laravel-job-listing",
    description:
      "This is an open-source job board application powered by Laravel. The goal of this is to let you self-host your own job board website, similar to larajobs.com or remoteok.io.",
  },
  {
    id: 6,
    title: "OTP generator Package",
    category: "Laravel Package",
    img: require("@/assets/images/otp_generate_package.png"),
    link: "https://github.com/OfficialOzioma/otp-generator",
    description: `This is Laravel package for generation One Time Password (OTP) generator and validation. This is done on the cache it supported all the laravel cache drivers: "apc", "array", "database", "file", "memcached", "redis"`,
  },
];

export default projects;
