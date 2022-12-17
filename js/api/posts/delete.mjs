import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Deletes the post with the id number.
 * @param {number} id of the post.
 */

export async function removePost(id) {
  // Error for missing post id.
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(updatePostURL, {
    method,
  });

  return await response.json();
}
