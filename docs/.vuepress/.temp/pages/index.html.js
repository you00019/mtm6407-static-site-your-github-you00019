export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-CA\",\"frontmatter\":{\"home\":true,\"heroText\":\"Hello there\",\"heroImage\":\"/images/poster.png\",\"tagline\":\"Welcome to my interest website\",\"actions\":[{\"text\":\"About me\",\"link\":\"/about/\",\"type\":\"primary\"},{\"text\":\"Contact\",\"link\":\"/contact/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Hobby 1\",\"details\":\"Singing\"},{\"title\":\"Hobby 2\",\"details\":\"Cooking\"},{\"title\":\"Hobby 3\",\"details\":\"Singing karaoke\"}],\"footer\":\"copyright@ Jia2023\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
