const uri = 'http://react-readable-huntinghawk.c9users.io:8080';
const headers = {
  headers: {
    'Authorization': 'what-ever-you-want'
  },
};

export const fetchPosts = () => {
  fetch(`${uri}/posts`, headers)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
};