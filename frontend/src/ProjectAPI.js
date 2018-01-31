// const uri = 'http://localhost:3001';
const uri = 'http://react-readable-huntinghawk.c9users.io:8080';
const headers = {
  'Authorization': 'why-you-do-dis',
};

export const fetchAllPosts = () =>
  fetch(`${uri}/posts`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchSpecPost = id =>
  fetch(`${uri}/posts/${id}`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchComments = id =>
  fetch(`${uri}/posts/${id}/comments`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchCategories = () =>
  fetch(`${uri}/categories`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

export const fetchCatPosts = cat =>
  fetch(`${uri}/${cat}/posts`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

export const postVote = (id, vote) =>
  fetch(`${uri}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({options:vote}),
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
