import { getPosts } from "../api/posts/read.mjs";

const posts = { getPosts };
document.getElementById("posts").innerHTML = posts;

function functionA() {
  posts.sort();
  document.getElementById("posts").innerHTML = posts;
}
function functionB() {
  posts.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("posts").innerHTML = posts;
}
