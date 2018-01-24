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

export const fetchSpecPost = (id) =>
  fetch(`${uri}/posts/${id}`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));