const uri = 'http://localhost:3001';
const headers = {
  'Authorization': 'why-you-do-dis',
}

export const fetchAllPosts = () =>
  fetch(`${uri}/posts`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
