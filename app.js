const request = axios.create({
  baseURL: 'https://api.github.com'
})

// get user data
// request.get('/users/djrenot')
//   .then(res => res.data)
//   .then(console.log)

// get user repos
request.get('/users/djrenot/repos')
  .then(res => res.data)
  .then(repos => {
    console.log(repos);
    for(let i=0;i<repos.length;i++){
      // console.info('this is' + i)
      console.log(repos[i].name)
    }
  })