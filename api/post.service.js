import { api } from "./api";

export function getAllPosts() {
  return api("/submissions");
}

export function getPost(id) {
  return api(`/submissions/${id}`);
}

export function createPost(data) {
  return api("/submissions", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updatePost(id, data) {
  return api(`/submissions/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deletePost(id) {
  return api(`/submissions/${id}`, {
    method: "DELETE",
  });
}