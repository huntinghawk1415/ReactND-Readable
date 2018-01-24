const uri = 'http://localhost:3001';

const headers = {
  'Authorization': 'why-you-do-dis',
}

export const fetchPosts = () =>
  fetch(`${uri}/posts`, {headers})
    .then(response => response.json())
    .then(data => console.log(data, new Date(data[0].timestamp * 1000)))
    .catch(err => console.log(err))
