// const uri = 'http://localhost:3001';
const uri = 'http://react-readable-huntinghawk.c9users.io:8080';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'why-you-do-dis',
};

export const fetchAllPosts = () =>
  fetch(`${uri}/posts`, {headers})
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchSpecPost = id =>
  fetch(`${uri}/posts/${id}`, {headers})
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchComments = id =>
  fetch(`${uri}/posts/${id}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchCategories = () =>
  fetch(`${uri}/categories`, {headers})
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchCatPosts = cat =>
  fetch(`${uri}/${cat}/posts`, {headers})
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const postVote = (id, vote) =>
  fetch(`${uri}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({option: vote}),
  }).then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const commentVote = (id, vote) =>
  fetch(`${uri}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({option: vote}),
  }).then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const deletePost = (id) =>
  fetch(`${uri}/posts/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .catch(err => console.log(err));

export const deleteComment = (id) =>
  fetch(`${uri}/comments/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .catch(err => console.log(err));