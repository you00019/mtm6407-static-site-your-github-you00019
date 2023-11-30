import { defaultTheme } from "vuepress";

export default {
  lang: "en-CA",
  title: "My interests",
  // description: "Just playing around",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "/about",
      },
      {
        text: "Contact",
        link: "/contact.md",
      },
    ],
  }),
};
