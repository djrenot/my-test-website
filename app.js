const request = axios.create({
  baseURL: 'https://api.github.com'
})

request.get('/users/djrenot')
  .then(res => res.data)
  .then(console.log)