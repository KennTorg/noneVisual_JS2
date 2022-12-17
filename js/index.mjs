import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/profile/") {
  postMethods.getPosts();
  postMethods.getPost(1);
  listeners.searchPosts();
  templates.postTemplate();
  templates.renderPostTemplate();
  templates.renderPostTemplates();
  listeners.functionA();
  listeners.functionB();
}

// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ CONSOLE TESTING! ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ //

// CREATE POST TEST --- WORKING!!

/* createPost({
  title: "Its snowing!",
  body: "So much!!!!!",
});
 */

// UPDATE POST TEST --- WORKING!!

/* updatePost({
  id: 1,
  title: "Its snowing! UPDATED!",
  body: NOT so much!!!,
});
*/

// DELETE POST --- WORKING!!

// removePost(1);

// GET POSTS --- WORKING

//postMethods.getPosts().then(console.log);

// GET POST BY ID --- WORKING

// postMethods.getPost(1).then(console.log);

/* async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts.pop()
  renderPostTemplate(post,)
} */

// SEARCH

// searchPosts();

// SORT
//
//
