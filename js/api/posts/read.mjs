import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Gets defaults numbers of posts
 * @returns 100 posts
 */

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

/**
 * Gets the post with ID from the API.
 * @param {number} id of the the post.
 * @returns a single post.
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Requires postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  const post = await response.json();

  return post;
}
