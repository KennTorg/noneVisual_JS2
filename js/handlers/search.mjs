import { getPosts } from "../api/posts/read.mjs";

export async function searchPosts() {
  const posts = getPosts();
  const searchInput = document.querySelector("#searchInput");
  const searchForm = document.querySelector("search");
  const container = document.querySelector(".posts");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const filterPosts = posts.filter((post) => {
      const body = post.body.toLowerCase();
      const searchValue = searchInput.value.toLocaleLowerCase();
      const handler = post.author.name.toLocaleLowerCase();

      if (handler.includes(searchValue) || body.includes(searchValue)) {
        return true;
      }
    });

    container.innerHTML = "";
    templates.renderPostTemplate(filterPosts, container);
  });
}
