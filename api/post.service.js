import { api } from "./api";

export function getAllPosts() {
  return api("/posts");
}

export function getPost(id) {
  return api(`/posts/${id}`);
}

export function createPost(data) {
  return api("/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updatePost(id, data) {
  return api(`/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deletePost(id) {
  return api(`/posts/${id}`, {
    method: "DELETE",
  });
}